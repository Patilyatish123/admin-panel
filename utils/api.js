

  import axios from 'axios';

  // Axios instance for making HTTP requests
  const API = axios.create({
    baseURL: 'https://eazrdaily.eazr.in', // Backend domain (for OTPs)
  });

  // Axios instance for local API routes
  const LocalAPI = axios.create({
    baseURL: '/api', // Assumes you're calling Next.js API routes or a local backend
  });

  // Sends OTP to the given contact number (7710957578)
  export const sendOtp = async (contactNumber) => {
    return API.post('/auth/admin/sendOtp', { contactNumber });
  };

  //Verify OTP entered by the admin
  export const verifyOtp = async (otp) => {
    if (otp === '7710') {
      return { data: { token: 'mocked-jwt-token' } };
    } else {
      throw new Error('Invalid OTP');
    }
  };

  //Fetch All Users
  export const fetchUsers = async (token) => {
    console.log('Fetching users with token:', token);

    try {
      const response = await LocalAPI.get('/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Users fetched successfully:', response.data);
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };

  // Fetches details of a specific user by ID 
  export const fetchUserById = async (id, token) => {
    console.log(`Fetching user with ID: ${id} and token:`, token);

    try {
      const response = await LocalAPI.get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('User details:', response.data);
      return response;
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  };

