export default function manifest() {
  return {
    name: "JustSkills",
    short_name: "JustSkills | Improve then prove.",
    description:
      "JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
