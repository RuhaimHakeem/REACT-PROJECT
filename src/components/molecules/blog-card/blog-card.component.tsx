import React from "react";
import { Text } from "../../atoms";

interface Props {
  author: string;
  title: string;
  body: string;
  id: number;
}

export type BlogCardProps = Props;

export const BlogCard: React.FC<Props> = ({ author, title, id }) => {
  return (
    <div className="blog-preview" key={id}>
      <Text.H2>{title}</Text.H2>
      <Text.P>Written by {author}</Text.P>
    </div>
  );
};
