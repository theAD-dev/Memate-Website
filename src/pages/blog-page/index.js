import Layout from "../../layout";
import React from "react";
import Blog from "../../components/blog";
const BlogPage = ({ posts, PostsCategories, activeCategory, handleTabClick, postsLatest, totalPosts, loading, handleNext }) => {
  return (
    <Layout>
      <Blog PostsCategories={PostsCategories} activeCategory={activeCategory} handleTabClick={handleTabClick} posts={posts} postsLatest={postsLatest} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />
    </Layout>
  );
};

export default BlogPage;