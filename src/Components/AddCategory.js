import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    //el inputValue siempre sera el ultimo valor que escribio el usuario
    const [inputValue, setInputValue] = useState('');
    //para poder imprimir lo que se escribe con el teclado
    const handleValueChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        //evita el recargo de la pagina por defecto cuando se da enter en el formulario
        e.preventDefault();
        //console.log("Submit Hecho");
        if(inputValue.trim().length > 2){
            //el cat permite barrer o acceder a los valores dentro del state
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleValueChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;