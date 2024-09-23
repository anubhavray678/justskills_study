import CategoryCard from "@/components/category/CategoryCard";

const data = [
  {
    id: 1,
    title: "Data Structures",
    text: "Explore fundamental data structures with real-world examples.",
    url: "data-structure",
    imageUrl: "/data.jpg",
  },
  {
    id: 2,
    title: "Algorithms",
    text: "Learn essential algorithms with code snippets and explanations.",
    url: "algorithms",
    imageUrl: "/algorithm.png",
  },
  {
    id: 3,
    title: "System Design",
    text: "Master designing scalable systems with practical system design concepts.",
    url: "system-design",
    imageUrl: "/system.png",
  },
  {
    id: 4,
    title: "OOPS",
    text: "Understand object-oriented programming principles with clear use cases.",
    url: "object-oriented-programming",
    imageUrl: "/oops.jpg",
  },
  {
    id: 5,
    title: "Interview Experiences",
    text: "Real-world interview stories and insights from successful candidates.",
    url: "interview",
    imageUrl: "/interview.jpg",
  },
  {
    id: 6,
    title: "Behaviour Interview",
    text: "Tips and guidance for acing behavioral interview questions.",
    url: "behaviour-interview",
    imageUrl: "/binterview.jpeg",
  },
  {
    id: 7,
    title: "Emerging-tech",
    text: "Discover the latest trends and innovations in technology.",
    url: "emerging-tech",
    imageUrl: "/emerging.jpeg",
  },
  {
    id: 9,
    title: "Programming",
    text: "Dive into programming tutorials, languages, and developer tools.",
    url: "programming",
    imageUrl: "/programming.png",
  },
  {
    id: 10,
    title: "Project",
    text: "Hands-on project ideas and practical web development applications.",
    url: "project",
    imageUrl: "/project.jpeg",
  },
  {
    id: 11,
    title: "Placement",
    text: "Expert advice and resources for cracking job placement interviews.",
    url: "placement",
    imageUrl: "/placement.png",
  },
];

export default function Category() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        {data.map((category) => (
          <div key={category.id}>
            <CategoryCard
              title={category.title}
              text={category.text}
              url={category.url}
              imageUrl={category.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
