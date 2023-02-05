import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useGet(url: any) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        setIsPending(false);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        setIsPending(false);
        console.error(error.message);
      }
    })();
  }, [url]);

  return { data, isPending, error };
}

export default useGet;
