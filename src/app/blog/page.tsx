import React from 'react';
import styles from './blog.module.scss';
import BlogCard from '@/components/BlogCard/BlogCard';
import blogData from '@/data/blogData';
import Grid from '@mui/material/Grid';

const Blog: React.FC = () => {
  return (
    <div className={styles.blog}>
      <div className="sectionHeadingWrapper">
        <div className="sectionHeading">
          <h1>blog</h1>
        </div>
      </div>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {blogData
          .sort((a, b) => b.id - a.id)
          .map((article) => (
            <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
              <BlogCard {...article} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Blog;
