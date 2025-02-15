import { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify'

export default function useFetchData(url: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los datos')
        toast.error('Error al carar los datos')
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error };
}
