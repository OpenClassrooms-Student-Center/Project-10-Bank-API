import { URL_PROFILE } from '../config';
import { axiosInstance } from './axios';

// Fetching user datas
export async function userDatas() {

  const token = localStorage.getItem('authAccessToken');
  try {
    const response = await axiosInstance.post(URL_PROFILE, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }, 
    });
    return response.data.body;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données de l\'utilisateur');
  }
}

