import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GridGift } from './components/GridGift';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    return (
        <div className = "container">
            <h1>Gift Expert App</h1>
            <AddCategory 
                setCategories = { setCategories } 
            />
            
            <hr />
          
            {
                categories.map(category =>(
                    <GridGift 
                        key = {category} 
                        category = {category}
                    />
                ))
            }
        </div>
    )
}
