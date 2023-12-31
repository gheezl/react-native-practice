import { useState, useEffect } from "react";

const RAPID_API_KEY = '971346fa9fmsh942519ee7e82eb9p1b706ejsn3fd22fc0cd6c'

const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    // console.log(query, encodeURIComponent(query));

    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&num_pages=1`;

    // console.log(url);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data);
            setIsLoading(false);
        }
        catch (error) {
            setError(error);
            alert('There is an error.');
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        // fetchData();
    }, [])


    // ? odd ?
    const refetch = () => {
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;