import Layout from "../../layout";
import React from "react";
import Blog from "../../components/blog";
const BlogPage = ({ posts, postsLatest,PostsCategories, totalPosts, loading, handleNext }) => {
  return (
    <Layout>
      <Blog posts={posts} PostsCategories={PostsCategories} postsLatest={postsLatest} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />
    </Layout>
  );
};

export default BlogPage;