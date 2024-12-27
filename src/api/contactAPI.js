export const RequestCallBackAPI = async (formData) => {
  
    const myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formData), 
      redirect: "follow",
    };
  
    try {
      const response = await fetch("https://admin.memate.au/api/request-callback", requestOptions);
      const result = await response.text();
      if (!response.ok) {
        throw new Error(result || 'Request failed');
      }
      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error; 
    }
  };
  


  export const SubscribeEmail = async (data) => {
    try {
      const response = await fetch('https://admin.memate.au/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error('Error in SubscribeEmail:', error);
      throw error;
    }
  };
  