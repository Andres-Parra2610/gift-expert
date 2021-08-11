import React from 'react'
import { GridGiftList } from './GridGiftList';
import { useFetch } from '../hooks/useFetch';


export const GridGift = ({category}) => {

    const {data:images, loading} = useFetch(category);
 
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className = "card-grid">
                {
                    images.map(img => (
                        <GridGiftList
                            key = {img.id}
                            /** Esto sirve para mandar las propiedades del objeto
                             * por seperado
                             */
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}



