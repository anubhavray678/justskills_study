import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  const { postSlug, postTitle, postImg } = await req.json();
  try {
    const savedPost = await prisma.savedPost.create({
      data: {
        postSlug,
        postTitle,
        postImg,
        userEmail: session.user.email,
      },
    });
    return new NextResponse(JSON.stringify(savedPost), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//get api

export async function GET(req) {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    // No need to include post: true since postSlug, postImg, and postTitle are in SavedPost
    const savedPosts = await prisma.savedPost.findMany({
      where: { userEmail: session.user.email },
      select: {
        postSlug: true,
        postTitle: true,
        postImg: true,
        // Include other fields you want to return if necessary
      },
    });

    return new NextResponse(JSON.stringify(savedPosts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
