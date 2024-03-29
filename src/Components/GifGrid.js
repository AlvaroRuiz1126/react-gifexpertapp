import React from 'react';
import PropTypes from 'prop-types';
import {GifGridItem} from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

const GifGrid = ({categories}) => {
    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(categories);
    //console.log(data, loading);
    // //console.log(images);
    
    //getGifs();

    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{categories}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {images.map(img => 
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />)}
            </div>
        </>
    ); 
};

GifGrid.propTypes = {
    categories: PropTypes.string.isRequired
}

export default GifGrid;