// import axios from "axios";

// import { useEffect, useState } from "react";

// export default function useFetch(url: string) {
//   const [data, setData] = useState<any>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         setData(response.data.data);
//         console.log(response.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data };
// }

import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data); // فقط آرایه محصولات
        console.log("Fetched data:", response.data.data);
      } catch (err) {
        console.log("ERROR FETCHING:", err.message);
        console.log("FULL ERROR:", err.response?.data);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
