import { API_URL } from "@/config/constants";
export const getPosts = async (offset , limit) => {

  const url = `${API_URL}?_start=${offset}&_limit=${limit}`;


  try {

    const response = await fetch(url)
    const data = await response.json();


    if(!response.ok){
      console.error("something went wrong!")
      return []
    }

    return data;

  } catch (err) {
    console.log(err);
    return [];
  }





}