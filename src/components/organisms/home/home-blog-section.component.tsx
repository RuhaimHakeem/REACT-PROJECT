import React from "react";
import { Text } from "../../atoms";
import { BlogCard, BlogCardProps } from "../../molecules";

interface Props {
  title: string;
  blogs: Array<BlogCardProps>;
}

export const HomeBlogSection: React.FC<Props> = ({ title, blogs }) => {
  return (
    <div className="blog-list">
      <Text.H2>{title}</Text.H2>
      {blogs.map((blog) => (
        <BlogCard {...blog} />
      ))}
    </div>
  );
};
