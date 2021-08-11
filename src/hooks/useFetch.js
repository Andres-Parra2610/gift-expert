import { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGift';


export const useFetch = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        getGift(category)
            .then(gifs =>{

                setTimeout(()=>{
                    setState({
                        data: gifs,
                        loading: false
                    })
                }, 3000)
            })
    }, [category])



    return state;
}