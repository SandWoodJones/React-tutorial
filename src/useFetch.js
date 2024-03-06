import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(
                    res => { 
                        if (!res.ok) throw Error('Could not fetch data for resource');
                        return res.json();
                    }
                ).then(
                    d => { 
                        setData(d);
                        setIsLoading(false);
                        setError(null);
                    }
                ).catch(
                    e => {
                        if (e.name === "AbortError") console.log("Fetch aborted");
                        else {
                            setError(e.message);
                            setIsLoading(false);
                        }
                    }
                );
        }, 1000)

        return () => abortCont.abort();
    }, [url]); // dependencies array

    return {data, isLoading, error};
}

export default useFetch;


