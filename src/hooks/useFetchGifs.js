import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categories) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //con el useEffect, el componente solo se renderiza una unica vez o cuando cambie categories
    //los useEffect no pueden ser async
    useEffect(() => {
        getGifs(categories).then(imgs => 
                setState({
                    data: imgs,
                    loading: false
                })
        )
    }, [categories]);
    //console.log(state);


    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     });
    // }, 1000);

    return state;
};