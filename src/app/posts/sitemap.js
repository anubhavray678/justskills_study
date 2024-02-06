export default async function sitemap({ id }) {
  const response = await fetch("https://study.justskills.in/read");
  const { posts } = await response.json();

  return posts.map(({ id }) => ({
    url: `https://study.justskills.in/posts/${id}`,
    // lastModified: new Date(posts.updatedAt),
  }));
}
export async function generateSitemaps() {
  return [
    {
      url: "",
      lastModified: new Date(),
    },
  ];
}
