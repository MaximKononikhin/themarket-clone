import { endPoint } from "../utils/constants";

type FetchOptions = {
  method: string;
  headers?: {
    [key: string]: string;
  };
  body?: any;
};

export async function makeApiCall <T>(route: string, options: FetchOptions): Promise<T> {
  const result = await fetch(`${endPoint}/${route}`, { ...options });

  try {
    return await result.json();
  } catch (error) {
    return;
  }
};