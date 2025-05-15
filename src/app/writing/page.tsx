import React from "react";
import styles from "./writing.module.scss";
import BlogCard from "@/components/BlogCard/BlogCard";
import mockBlogArticles from "@/data/mockBlogData";

const Writing: React.FC = () => {
  return (
    <div className={styles.writing}>
      {/* heading container */}
      <div className={styles.writingHeading}>
        <h1 className="section-heading">blog</h1>
      </div>

      {/* blog card container */}
    <div className={styles.container}>

      <div className={styles.cardContainer}>
        {mockBlogArticles.map((article) => (
          <BlogCard key={article.id} {...article} />
        ))}
      </div>
      </div>
      </div>
  );
};

export default Writing;