import { useState, useEffect } from 'react';

const useFetch = (requestUrl) => {
    // set your fetch data and error types instead of any
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${requestUrl}`);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [requestUrl]);

    return { data, error, isLoading };
};

export default useFetch;