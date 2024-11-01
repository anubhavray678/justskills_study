import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(request) {
  try {
    // Parse JSON body
    const { resume, jobDescription } = await request.json();

    if (!resume || !jobDescription) {
      return NextResponse.json(
        { error: "Resume and job description are required." },
        { status: 400 }
      );
    }

    // Prepare the prompt for Gemini
    const prompt = `
      Analyze the following resume and job description. Provide:
      1. A match percentage (0-100)
      2. A list of matching skills
      3. A list of missing skills from the resume that are mentioned in the job description
      4. Brief suggestions for improving the resume

      Resume:
      ${resume}

      Job Description:
      ${jobDescription}

      Format the response as JSON with the following structure:
      {
        "matchPercentage": number,
        "matchingSkills": string[],
        "missingSkills": string[],
        "suggestions": string[]
      }
    `;

    // Call the Gemini API
    const result = await model.generateContent(prompt);
    const response = result.response;

    // Get the response text and log it for debugging
    const text = await response.text();

    console.log("Raw response from Gemini API:", text); // Log raw response

    // Remove markdown formatting
    const cleanText = text.slice(7, -3).trim();
    // Remove markdown backticks

    // Parse the cleaned response as JSON
    const analysis = JSON.parse(cleanText);

    // Return the analysis as JSON
    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      {
        matchPercentage: 0,
        matchingSkills: [],
        missingSkills: [],
        suggestions: ["Error analyzing resume. Please try again."],
      },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const { resume, jobDescription } = await request.json();

//     if (!resume || !jobDescription) {
//       return NextResponse.json(
//         { error: "Resume and job description are required." },
//         { status: 400 }
//       );
//     }

//     // Mock implementation of the analysis
//     // Replace this logic with actual NLP or AI-powered skill matching
//     const matchingSkills = ["JavaScript", "React", "Node.js"];
//     const requiredSkills = ["JavaScript", "React", "Node.js", "GraphQL", "AWS"];

//     const matching = matchingSkills.filter((skill) =>
//       requiredSkills.includes(skill)
//     );
//     const missing = requiredSkills.filter((skill) => !matching.includes(skill));
//     const matchPercentage = Math.round(
//       (matching.length / requiredSkills.length) * 100
//     );

//     const suggestions = missing.map(
//       (skill) =>
//         `Consider learning ${skill} to better match the job description.`
//     );

//     // Prepare response data
//     const responseData = {
//       matchPercentage,
//       matchingSkills: matching,
//       missingSkills: missing,
//       suggestions,
//     };

//     return NextResponse.json(responseData);
//   } catch (error) {
//     console.error("Error processing resume analysis:", error);
//     return NextResponse.json(
//       {
//         error:
//           "An error occurred while analyzing the resume. Please try again.",
//       },
//       { status: 500 }
//     );
//   }
// }
