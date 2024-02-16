import { useEffect, useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async (url) => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        data?.length > 0
            ? setState({
                data,
                isLoading: false,
                hasError: null
            })
            : setState({
                data: null,
                isLoading: false,
                hasError: null
            });

    };
    
    return {
        ...state,
        getFetch
    };
}
