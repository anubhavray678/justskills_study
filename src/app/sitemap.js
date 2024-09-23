import GetBlogs from "@/lib/getBlogs";

const URL = "https://study.justskills.in";

export default async function Sitemap() {
  try {
    // Fetch study posts
    let blogs = await GetBlogs();

    // Define additional URLs
    const additionalUrls = [
      {
        url: "https://justskills.in",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/login",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=android",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=emerging-tech",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=coding",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=travel",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=culture",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=placement",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
    ];

    // Concatenate all URLs
    const allUrls = [...additionalUrls, ...blogs];

    return allUrls;
  } catch (error) {
    console.error("Error fetching study posts:", error);
    throw new Error("Failed to generate sitemap");
  }
}
