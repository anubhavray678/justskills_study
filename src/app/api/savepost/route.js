import prisma from "@/utils/connect";
import { getSession } from "next-auth/react";

export const POST = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { postSlug } = req.body;

  try {
    const savedPost = await prisma.savedPost.create({
      data: {
        userEmail: session.user.email,
        postSlug,
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
      where: { userEmail: session.user.email },
      include: { post: true },
    });
    res.status(200).json(savedPosts);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve saved posts" });
  }
};
