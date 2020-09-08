import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['OnePunch', 'Samurai X', 'Naruto'];
    const [categories, setCategories] = useState(['OnePunch']);
    /*const handleAdd = () => {
        //para actualizar el estado de un array, va entre corchetes
        //setCategories([...categories,'Dragon ball Z']);
        //o como un callback, que es muy util para la comunicacion entre componentes
        //setCategories(cat => [...cat,'Dragon ball Z']);
        //console.log(categories);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/*<button onClick={handleAdd}>Agregar</button>*/}
            <ol>
                {categories.map(cat =>{
                    return <GifGrid key={cat} categories={cat} />;
                })}
            </ol>
        </>
    );
};



export default GifExpertApp;