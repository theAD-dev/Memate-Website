import Layout from "../../layout";
import React from "react";
import Blog from "../../components/blog";
const BlogPage = ({posts,postsLatest,handleNext,handlePrevious}) => {


  return (
    <Layout>
     
  <Blog posts={posts}postsLatest={postsLatest} handleNext={handleNext} handlePrevious={handlePrevious} />

    </Layout>
  );
};
export default BlogPage;