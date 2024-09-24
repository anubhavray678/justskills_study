import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET Bookmarks for the current user
export const GET = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const bookmarks = await prisma.bookmark.findMany({
      where: { userId: session.user.id },
      include: {
        post: true, // Include post details with each bookmark
      },
    });

    return new NextResponse(JSON.stringify(bookmarks), { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// POST - Add Bookmark for the current user
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const { postId } = await req.json();

    // Check if the bookmark already exists
    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userId_postId: {
          userId: session.user.id,
          postId: postId,
        },
      },
    });

    if (existingBookmark) {
      return NextResponse.json(
        { message: "Bookmark already exists!" },
        { status: 400 }
      );
    }

    const bookmarks = await prisma.bookmark.create({
      data: {
        userId: session.user.id,
        postId: postId,
      },
    });

    return new NextResponse(JSON.stringify(bookmarks), { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// DELETE - Remove Bookmark for the current user
export const DELETE = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const { postId } = await req.json();

    const bookmarks = await prisma.bookmark.findUnique({
      where: {
        userId_postId: {
          userId: session.user.id,
          postId: postId,
        },
      },
    });

    if (!bookmarks) {
      return NextResponse.json(
        { message: "Bookmark not found!" },
        { status: 404 }
      );
    }

    await prisma.bookmark.delete({
      where: {
        userId_postId: {
          userId: session.user.id,
          postId: postId,
        },
      },
    });

    return NextResponse.json(
      { message: "Bookmark removed successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
