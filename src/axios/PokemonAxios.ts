import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {ApiResponse} from 'src/axios';
import {POKE_API_BASE_URL} from 'src/constants/API';
import {PokemonListItem} from 'src/models/pokemonModel';

export interface PokemonApiConfig {
  baseURL: string;
  headers?: any;
}

export interface PokemonApiResponse {
  count: number;
  next: string;
  results: PokemonListItem[];
}

// Define a class to encapsulate the Axios instance and provide methods for making HTTP requests
class PokemonApiClient {
  private instance: AxiosInstance;

  constructor(config: PokemonApiConfig) {
    const options: AxiosRequestConfig = {
      baseURL: config.baseURL,
      headers: config.headers,
    };

    this.instance = axios.create(options);
  }

  public async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    console.log(params);
    try {
      // Make the GET request using the Axios instance
      const response: AxiosResponse<T> = await this.instance.get<T>(url, {
        params,
      });
      // If the request was successful, return an ApiResponse object with the response data, status code, and status text
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      // If there was an error, return an ApiResponse object with the error response data, status code, and status text
      return {
        data: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
      };
    }
  }

  // Define a method for making POST requests
  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      // Make the POST request using the Axios instance
      const response: AxiosResponse<T> = await this.instance.post<T>(
        url,
        data,
        config,
      );
      // If the request was successful, return an ApiResponse object with the response data, status code, and status text
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      // If there was an error, return an ApiResponse object with the error response data, status code, and status text
      return {
        data: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
      };
    }
  }

  // Add more methods as needed for other HTTP verbs (PUT, PATCH, DELETE, etc.)
}

const pokemonApiClient = new PokemonApiClient({
  baseURL: POKE_API_BASE_URL,
});

export default pokemonApiClient;
