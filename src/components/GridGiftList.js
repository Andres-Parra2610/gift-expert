import React from 'react'

export const GridGiftList = ({title, img}) => {


    return (
        <div className = "card">
            <p>{ title }</p>
            <img 
                src = { img } 
                alt = { title } 
            />
        </div>
    )
}
