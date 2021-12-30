import React from "react";
import { BlogCardProps } from "../../molecules";
import { HomeBlogSection } from "../../organisms";

const blogs: BlogCardProps[] = [
  {
    title: "My new website",
    body: "lorum ipsum....",
    author: "ruhaim",
    id: 1,
  },
  {
    title: "Welcome Party",
    body: "lorum ipsum....",
    author: "Aathik",
    id: 2,
  },
  {
    title: "web dev top tips",
    body: "lorum ipsum....",
    author: "hammadh",
    id: 3,
  },
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <HomeBlogSection blogs={blogs} title={"Main blog"} />
      <HomeBlogSection
        blogs={blogs.filter((blog) => blog.author === "ruhaim")}
        title="Ruhaim's Blogs"
      />
    </div>
  );
};

export default Home;
