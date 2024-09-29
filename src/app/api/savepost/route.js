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

export const GET = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const savedPosts = await prisma.savedPost.findMany({
      where: { userEmail: session.user.email },
      include: { post: true }, // Include the related post information
    });

    return new NextResponse(JSON.stringify(savedPosts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
