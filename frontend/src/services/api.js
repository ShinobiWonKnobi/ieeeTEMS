import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints
export const getImages = async (name) => {
  try {
    const response = await api.get(`/images/name/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export const getImageById = async (id) => {
  try {
    const response = await api.get(`/images/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};

// Function below this line to be removed
/*
export const uploadImage = async (name, imagePath) => {
  try {
    const response = await api.post('/upload', { name, image: imagePath });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
*/
// Function above this line to be removed

export default api; 