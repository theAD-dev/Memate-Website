

// export const supplierListApi = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow"
//     };
  
//     try {
//       const response = await fetch("https://admin.memate.au/api/supplier-lists", requestOptions);
//       const result = await response.json(); 
//       console.log("API response:", result);
  
//       return result.data ? result.data : [];
  
//     } catch (error) {
//       console.error("Error fetching blog posts:", error);
//       return [];
//     }
//   };
  export const supplierListApi = async () => {
  const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://admin.memate.au/api/supplier-lists", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

};