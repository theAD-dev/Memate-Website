export const wikiBase = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://admin.memate.au/api/get-wiki", requestOptions);
      const result = await response.json(); 
  
      return result;
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }

  };
export const wikiBaseId = async (idData ) => {

    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`https://admin.memate.au/api/get-wiki-by-id/${idData }`, requestOptions);
      const result = await response.json(); 
  
      return Array.isArray(result.data) ? result.data : [];
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };

export const wikiBaseDtails = async (idData) => {


    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`https://admin.memate.au/api/wiki-detail/${idData}`, requestOptions);
      const result = await response.json(); 
  
      return Array.isArray(result.data) ? result.data : [];
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };


  export const wikiBaseBSearch = async (searchQuery) => {
    console.log('searchQuery: ', searchQuery);
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(`https://admin.memate.au/api/get-wiki?search=${searchQuery}`, requestOptions);
      const result = await response.json(); 
  
      return result;
  
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };
  

  // export const wikiBaseBSearch = async (searchQuery) => {
  //   console.log('searchQuery: ', searchQuery);
  //   const myHeaders = new Headers();
  //   myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow"
  //   };
  
  //   try {
  //     const url = new URL(`https://admin.memate.au/api/wiki-search/${searchQuery}`);
   
  //     if (searchQuery) url.searchParams.append("search", searchQuery);
  
  //     const response = await fetch(`${url}`, requestOptions);
  //     const result = await response.json(); 
  //     console.log("API response:", result);
  
  //     return result;
  
  //   } catch (error) {
  //     console.error("Error fetching Supplier:", error);
  //     return [];
  //   }
  // };