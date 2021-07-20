import React from 'react'
import PropTypes from 'prop-types';
import { useFetchgifs } from '../hooks/useFetchgifs'
import { GifGridItem } from './GifGridItem'



export const GifGrid = ({categorie}) => {

    const {data:images,loading}=useFetchgifs( categorie )


    // getGifs({categorie})

    return (
        
        <>
            <h3 className="animate__animated animate__shakeY"> {categorie} </h3>

            {loading && <p className="animate__animated animate__flash">Loading</p> }  

            <div className="card-grid">

            {
                images.map( (img)   =>(

                    <GifGridItem
                    key= {img.id}
                    // img= {img} 
                    {...img} />

                ))

            }


            {/* <h3> {count} </h3>
            <button onClick = { ()=>setcount(count+1) } ></button> */}
            </div>

        </>     

    )
}

GifGrid.propTypes ={

    categorie:PropTypes.string.isRequired

}