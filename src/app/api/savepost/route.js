import prisma from "@/utils/connect";
import { getSession } from "next-auth/react";

export const POST = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { postId } = req.body;

  try {
    const savedPost = await prisma.savedPost.create({
      data: {
        userId: session.user.id,
        postId,
      },
    });
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Unable to save post" });
  }
};

export const GET = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const savedPosts = await prisma.savedPost.findMany({
      where: { userId: session.user.id },
      include: { post: true },
    });
    res.status(200).json(savedPosts);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve saved posts" });
  }
};
