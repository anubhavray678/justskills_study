import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// POST - Add Bookmark for the current user
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const { postSlug } = await req.json();

    // Check if the bookmark already exists
    const existingBookmark = await prisma.bookmark.findUnique({
      where: {
        userEmail_postSlug: {
          userEmail: session.user.email,
          postSlug: postSlug,
        },
      },
    });

    if (existingBookmark) {
      return new NextResponse(
        JSON.stringify({ message: "Bookmark already exists!" }, { status: 400 })
      );
    }

    const bookmark = await prisma.bookmark.create({
      data: {
        userEmail: session.user.email,
        postSlug: postSlug,
      },
    });

    return new NextResponse(JSON.stringify(bookmark, { status: 201 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// DELETE - Remove Bookmark for the current user
export const DELETE = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const { postSlug } = await req.json();

    const bookmark = await prisma.bookmark.findUnique({
      where: {
        userEmail_postSlug: {
          userEmail: session.user.email,
          postSlug: postSlug,
        },
      },
    });

    if (!bookmark) {
      return new NextResponse(
        JSON.stringify({ message: "Bookmark not found!" }, { status: 404 })
      );
    }

    await prisma.bookmark.delete({
      where: {
        userEmail_postSlug: {
          userEmail: session.user.email,
          postSlug: postSlug,
        },
      },
    });

    return new NextResponse(
      JSON.stringify(
        { message: "Bookmark removed successfully!" },
        { status: 200 }
      )
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
