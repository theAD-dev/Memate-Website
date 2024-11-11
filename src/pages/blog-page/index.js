import Layout from "../../layout";
import React from "react";
import Blog from "../../components/blog";
const BlogPage = ({ posts, postsLatest, totalPosts, loading, handleNext }) => {
  return (
    <Layout>
      <Blog posts={posts} postsLatest={postsLatest} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />
    </Layout>
  );
};

export default BlogPage;