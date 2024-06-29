import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Base URL for blog posts
const URL = "https://study.justskills.in/posts";

export const GET = async (req) => {
  try {
    // Fetch all blog post slugs from the database
    const posts = await prisma.post.findMany({
      select: {
        slug: true, // Only select the 'slug' field
      },
    });

    // Map the slugs to full URLs
    const urls = posts.map((post) => `${URL}/${post.slug}`);

    // Return the URLs in JSON format with a status code of 200
    return NextResponse.json(urls, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    // Return an error message in JSON format with a status code of 500
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
