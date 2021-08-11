import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputValue = (e) =>{
        setInputValue(e.target.value);
    }


    const handleCategoryAdd = (e) =>{
        e.preventDefault();
        
        if(inputValue.trim().length > 0){
            setCategories([inputValue])
            
            setInputValue('');

        }

    }

   

    return (
        <form onSubmit = {handleCategoryAdd}>
            <input
                type = "text"
                value = { inputValue }
                onChange = { handleInputValue }
                placeholder = "Ejemplo: Pokemon"
            ></input>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
