import axios from "axios";
import { API_URL } from "../config";
//These request will be split off to separate api files

async function getAllImages(token) {
  try {
    const response = await axios.get(`${API_URL}/all_images`, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Add token to headers
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return error;
  }
}

async function uploadImage(data, token) {
  try {
    const response = await axios.post(`${API_URL}/image`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Add token to headers
        'Content-Type': 'application/json',  // Ensure the content type is set correctly
      }
    });
    return response.data;
  } catch (error) {
    console.log(error)
    return error;
  }
}

async function uploadProfilePicture(data, token) {
  try {
    const response = await axios.post(`${API_URL}/profile-picture`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Add token to headers
        'Content-Type': 'application/json',  // Ensure the content type is set correctly
      }
    });
    return response.data;
  } catch (error) {
    console.log(error)
    return error;
  }
}


export {
  getAllImages,
  uploadImage,
  uploadProfilePicture,
}