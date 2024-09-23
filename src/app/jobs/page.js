"use client";
import Products from "@/components/jobs/Products/Products";
import AccordSidebar from "@/components/jobs/Sidebar/AccordSidebar";
import Sidebar from "@/components/jobs/Sidebar/Sidebar";
import { useState } from "react";
import products from "@/components/db/data";
import Nav from "@/components/jobs/Navigation/Nav";
import Card from "@/components/jobs/filter/Card";
// export const metadata = {
//   title:
//     "Justskills | Joblist - current job openings in tech companies across all domains",
//   description:
//     "The aim of JustSkills is to make very high quality, easy-to-understand, not-so-boring text based courses (that revolve around Computer Science) available for learners for free. That's it.",
//   openGraph: {
//     title:
//       "Justskills | Joblist - current job openings in tech companies across all domains",
//     description:
//       "The aim of JustSkills is to make very high quality, easy-to-understand, not-so-boring text based courses (that revolve around Computer Science) available for learners for free. That's it.",
//     metadataBase: new URL("https://justskills.in/"),
//     image: "/logo.png",
//   },
// };

export default function JobList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ type, company, jobTitle }) =>
          type === selected || company === selected || jobTitle === selected
      );
    }

    return filteredProducts.map(
      ({ companyImg, jobTitle, company, type, jobLink }) => (
        <Card
          key={Math.random()}
          img={companyImg}
          title={jobTitle}
          company={company}
          type={type}
          jobLink={jobLink}
          show={true}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <AccordSidebar handleChange={handleChange} />

      <div>
        <div className="hidden lg:flex">
          <Sidebar handleChange={handleChange} />
        </div>
        <Nav
          query={query}
          handleInputChange={handleInputChange}
          placeholder={"Search your job here...."}
        />
        {/* <Recommended handleClick={handleClick} /> */}
        <Products result={result} />
      </div>
    </>
  );
}
