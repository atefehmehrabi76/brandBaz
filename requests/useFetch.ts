"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url: string, page?: number) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const baseUrl: string = "https://brand-baz.liara.run/api/v1/";

  useEffect(() => {
    const fetchData = async (url: string, page?: number) => {
      try {
        const response = await axios.get(`${baseUrl}${url}`, {
          params: { page: page },
        });
        setData(response.data.data);
        console.log("Fetched data:", response.data.data);
      } catch (err) {
        console.log("ERROR FETCHING:", (err as Error).message);
        if (axios.isAxiosError(err)) {
          console.log("FULL ERROR:", err.response?.data);
        } else {
          console.log("An unknown error occurred:", err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData(url, page);
  }, [url]);

  return { data, loading, error, baseUrl };
}
