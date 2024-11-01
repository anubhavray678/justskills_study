"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRef } from "react";
// export const metadata = {
//   title:
//     "Justskills - JobMatcher - current job openings in tech companies across all domains",
//   description:
//     "The aim of JustSkills is to make very high quality, easy-to-understand, not-so-boring text based courses (that revolve around Computer Science) available for learners for free. That's it.",
//   openGraph: {
//     title:
//       "Justskills | Joblist - current job openings in tech companies across all domains",
//     description:
//       "The aim of JustSkills is to make very high quality, easy-to-understand, not-so-boring text based courses (that revolve around Computer Science) available for learners for free. That's it.",
//     metadataBase: new URL("https://justskills.in/"),
//     image: "/logo.png",
//   },
// };
export default function ResumeMatcher() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const matchSectionRef = useRef(null);

  const handleButtonClick = () => {
    if (matchSectionRef.current) {
      matchSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setResult({
      matchPercentage: 65,
      matchingSkills: ["JavaScript", "React", "Node.js"],
      missingSkills: ["GraphQL", "AWS"],
      suggestions: [
        "Highlight your experience with RESTful APIs",
        "Consider learning GraphQL",
      ],
    });

    setIsLoading(false);
  }

  return (
    <div>
      <div className="relative bg-gradient-to-br from-green-100 to-red-200 flex justify-around items-center p-8 h-full overflow-hidden flex-col md:flex-row md:h-[80vh] gap-10">
        {/* Star Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="star-animation"></div>
        </div>

        <div className="relative z-10 text-center text-white bg-gradient-to-br from-indigo-700 to-purple-800 p-12 rounded-3xl shadow-2xl max-w-md mx-4">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-teal-300 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Optimize Your Resume for More Interviews
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Justskills helps you tailor your resume for any job by highlighting
            the key experiences and skills that recruiters value most.
          </p>
          <button
            onClick={handleButtonClick}
            className="px-6 py-3 font-semibold text-indigo-800 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            Match Job Description with Your Resume
          </button>
        </div>

        <style jsx>{`
          /* Keyframes for gradient animation */
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }

          /* Gradient animation for heading */
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientAnimation 4s ease-in-out infinite;
          }

          /* Star animation keyframes */
          @keyframes starTwinkle {
            0%,
            100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }

          /* Star animation container styling */
          .star-animation {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(
                circle at 50% 50%,
                white 1px,
                transparent 1px
              ),
              radial-gradient(circle at 10% 20%, indigo 2px, transparent 2px),
              radial-gradient(
                circle at 80% 30%,
                #ffffff55 1.5px,
                transparent 1.5px
              ),
              radial-gradient(circle at 20% 80%, #ffffff88 2px, transparent 2px),
              radial-gradient(circle at 90% 70%, #ffffff44 1px, transparent 1px);
            background-size: 100px 100px;
            animation: starTwinkle 5s infinite alternate ease-in-out;
          }
        `}</style>

        <div className="relative z-10 text-center text-white p-12 rounded-3xl shadow-2xl max-w-md mx-4 hidden sm:flex">
          <img
            className=" object-cover rounded-3xl transform transition-transform duration-500 hover:scale-105"
            src="./placement.png"
            alt="Job Placement Illustration"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent to-blue-400 opacity-20 hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      </div>

      <div
        ref={matchSectionRef}
        className="relative p-2  overflow-hidden mx-auto  max-w-xl rounded-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-semibold mb-1"
            >
              Resume
            </label>
            <textarea
              id="resume"
              name="resume"
              rows={5}
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-violet-400 outline-none bg-gray-100 dark:text-black"
              placeholder="Paste your resume here..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="jobDescription"
              className="block text-sm font-semibold mb-1"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              rows={5}
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-violet-400 outline-none bg-gray-100 dark:text-black"
              placeholder="Paste the job description here..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center p-3 font-semibold text-white bg-violet-700 rounded-lg transition duration-200`}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze"
            )}
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 rounded-lg space-y-6">
            <h2 className="text-2xl font-bold mb-2 text-center">
              Analysis Result
            </h2>
            <p className="text-sm mb-4 text-center">
              Here’s how your resume matches the job description:
            </p>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative flex items-center justify-center">
                <svg className="w-32 h-32" viewBox="0 0 100 100">
                  {/* Background circle with light sky-blue color */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#87CEEB" // Light sky blue
                    strokeWidth="10" // Slightly thicker for a border effect
                    className="opacity-50" // Slight transparency
                  />
                  {/* Foreground animated circle for match percentage */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#22c55e" // Green color for the fill
                    strokeWidth="8"
                    strokeDasharray="282.6"
                    strokeDashoffset={
                      282.6 - (282.6 * result.matchPercentage) / 100
                    }
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                {/* Display match percentage in the center */}
                <span className="absolute text-3xl font-bold">
                  {result.matchPercentage}%
                </span>
              </div>

              <div>
                <h3 className="text-md font-semibold mb-2">Matching Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {result.matchingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-violet-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold mb-2">Missing Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-500 rounded-full text-white text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold mb-2">
                  Suggestions for Improvement
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
