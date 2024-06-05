
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (Link) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Link);
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Link]);

  return { data, loading, error };
};

export default useFetch;
