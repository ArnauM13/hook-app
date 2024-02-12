import { useEffect, useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: true
    })

    const getFetch = async (url) => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        data?.length > 0
            ? setState({
                data,
                isLoading: false
            })
            : setState({
                data: null,
                isLoading: false
            })

    }
    
    return {
        ...state,
        getFetch
    }
}
