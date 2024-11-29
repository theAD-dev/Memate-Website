export const blogList = async (page, limit) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(
      `https://admin.memate.au/api/news?page=${page}&limit=${limit}`,
      requestOptions
    );
    const result = await response.json();
    console.log("API response:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};



///blogSingle
export const blogSingle = async (slug) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.au/api/news/${slug}`, requestOptions);
    const result = await response.json(); 
    console.log("API response:", result);

    return Array.isArray(result.data) ? result.data : [];

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};



////getCategories
export const getCategories = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.au/api/get-all-news-categories/`, requestOptions);
    const result = await response.json(); 
    console.log("API response:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

////getCategoriesID
export const getCategoriesID = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.au/api/get-all-news-categories/`, requestOptions);
    const result = await response.json(); 
    console.log("API response:", result);

    return result;

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
///fetchCategoryPost
export const fetchCategoryPost = async (postCateId) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
 
  try {
    const response = await fetch(`https://admin.memate.au/api/news?category_id=${postCateId}`, requestOptions);
    const result = await response.json(); 
    return result;
  } catch  {
   
    
  }
};


///fetchCategoryPost
export const slugTagsPost = async (slug) => {
  console.log('slugcccccccccddddddddddddccccccc: ', slug);


  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch(`https://admin.memate.au/api/news-tag/business-management-software`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));




};


///blogLatest
export const blogLatest = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.au/api/get-latest-three-news`, requestOptions);
    const result = await response.json(); 
    return result;
  } catch  {
   
    
  }
};



