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
        url: "https://justskills.in/about",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://justskills.in/contact",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      },
      {
        url: "https://justskills.in/read",
        lastModified: new Date(),
        changeFrequency: "weekly",
        // priority: 0.5,
      },

      {
        url: "https://justskills.in/jobs",
        lastModified: new Date(),
        changeFrequency: "weekly",
        // priority: 0.5,
      },
      {
        url: "https://justskills.in/read?cat=data-structure",
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
        url: "https://justskills.in/read?cat=programming",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=algorithms",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=system-design",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=object-oriented-programming",
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
      {
        url: "https://justskills.in/read?cat=interview",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=behaviour-interview",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in/read?cat=project",
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
