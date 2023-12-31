import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

export default function useNoticiasContext () {
    return useContext(NoticiasContext)
}

export const NoticiasProvider = ({children}) => {

    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChanges = e => {
        setCategory(e.target.value);
    }

    useEffect(()=> {
        const requestNews = async () => {
            setLoading(true)
            const ApiKey = import.meta.env.VITE_API_KEY
            let config = {
                headers: {
                    "X-Api-Key": `${ApiKey}`,
                    "Access-Control-Allow-Origin": "*"
                    
                }
            }            
            setPages(1);
            const { data } = await axios(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`, config)
            .then( response => response ).catch( err => console.error(err)).finally(() => {
                setLoading(false)
            } );
            setTotalPages(Math.ceil((data.totalResults)/20));
            setNews(data.articles);
        }
        requestNews();
    }, [category])

    useEffect(()=> {
        const requestNews = async () => {
            setLoading(true)
            const ApiKey = import.meta.env.VITE_API_KEY
            let config = {
                withCredentials: false,
                headers: {
                    "X-Api-Key": `${ApiKey}`,
                    "Access-Control-Allow-Origin": "*",
                    
                }
            }
            const { data } = await axios(`https://newsapi.org/v2/top-headlines?country=us&page=${pages}&category=${category}`, config).then( response => response ).catch( err => console.error(err)).finally(() => {
                setLoading(false)
            } );
            setNews(data.articles);
        }
        requestNews();
    }, [pages])

    const handlePages = (e, valor) => {
        setPages(valor);
    }

    return (
        <NoticiasContext.Provider value={{
            category,
            handleChanges,
            news,
            totalPages,
            handlePages,
            loading,
            pages
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}