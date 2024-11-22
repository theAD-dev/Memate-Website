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
  
      return Array.isArray(result.data) ? result.data : [];
  
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


  export const wikiBaseBSearch = async (searchQuery) => {
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(`https://admin.memate.au/api/wiki-search/${searchQuery}`, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
      if (result.status === 200 && result.data) {
        // Assuming you need to work only with the `data` key
        return result.data;
      } else {
        console.error("Unexpected API response format", result);
        return [];
      }
    } catch (error) {
      console.error("Error fetching filtered data:", error);
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