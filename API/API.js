import axios from 'axios';
import { API_URL } from '../config';

// Function to update the user's bio
async function updateBio(bio, token) {
  // Removed userId parameter from the function

  try {
    console.log('Sending data to server:', { bio }); // Log the data being sent to the server
    const response = await axios.put(
      `${API_URL}/set-bio`, // Removed userId from the payload
      { bio },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to headers
          'Content-Type': 'application/json', // Ensure the content type is set correctly
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating bio:', error);
    console.error('Server response:', error.response?.data); // Log server response for more details
    return error;
  }
}

// Function to get the user's bio
async function getBio(token) {
  try {
    const response = await axios.get(`${API_URL}/get-bio`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers for authentication
        'Content-Type': 'application/json', // Ensure the content type is set correctly
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching bio:', error);
    console.error('Server response:', error.response?.data); // Log server response for more details
    return error;
  }
}

// Function to update the user's artist type
async function updateArtistType(artistType, token) {
  // Removed userId parameter
  try {
    console.log('Sending data to server:', { artistType }); // Log the data being sent to the server
    const response = await axios.put(
      `${API_URL}/set-artist-type`, // Removed userId from the payload
      { artistType },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to headers
          'Content-Type': 'application/json', // Ensure the content type is set correctly
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating artist type:', error);
    console.error('Server response:', error.response?.data); // Log server response for more details
    return error;
  }
}

// Function to get the user's artist type
async function getArtistType(token) {
  try {
    const response = await axios.get(`${API_URL}/get-artist-type`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers for authentication
        'Content-Type': 'application/json', // Ensure the content type is set correctly
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching artist type:', error);
    console.error('Server response:', error.response?.data); // Log server response for more details
    return error;
  }
}

// Existing API functions
async function getAllImages(token) {
  try {
    const response = await axios.get(`${API_URL}/all_images`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return error;
  }
}

async function uploadImage(data, token) {
  try {
    const response = await axios.post(`${API_URL}/image`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers
        'Content-Type': 'application/json', // Ensure the content type is set correctly
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function uploadProfilePicture(data, token) {
  try {
    const response = await axios.post(`${API_URL}/profile-picture`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers
        'Content-Type': 'application/json', // Ensure the content type is set correctly
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const fetchProfilePicture = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/profile-picture/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile picture:', error);
    throw error;
  }
};

const updateProfilePicture = async (imageData, token) => {
  try {
    const response = await fetch(`${API_URL}/profile-picture`, {
      method: 'PUT', // Use PUT method to update
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Assuming you use a token for authentication
      },
      body: JSON.stringify(imageData),
    });

    if (!response.ok) {
      throw new Error('Failed to update profile picture');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    throw error;
  }
};

const deleteProfilePicture = async (publicId) => {
  try {
    const response = await fetch(`${API_URL}/delete-profile-picture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_id: publicId }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error deleting image:', error);
    return error;
  }
};

async function getAllProfilePictures(token) {
  try {
    const response = await axios.get(`${API_URL}/all-profile-pictures`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers
      },
    });

    return response.data.users; // Adjusted to return the full user data including bio and artistType
  } catch (error) {
    console.error('Error fetching profile pictures:', error);
    return error;
  }
}

const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/get-profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token if authentication is needed
      },
    });
    return response.data; // Return the user profile data
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

async function getUserImages(token) {
  try {
    const response = await axios.get(`${API_URL}/images`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to headers
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user's images:", error);
    return error;
  }
}

export {
  getAllImages,
  uploadImage,
  uploadProfilePicture,
  fetchProfilePicture,
  updateProfilePicture,
  deleteProfilePicture,
  getAllProfilePictures,
  updateBio,
  updateArtistType,
  getBio,
  getArtistType,
  getUserProfile,
  getUserImages,
};
