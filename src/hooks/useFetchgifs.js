import {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchgifs=( categoria )  =>{

    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    
    useEffect(() => {

        getGifs( categoria )
        .then( imgs => {


        
                setstate({
                    data:   imgs,
                    loading:false  
                })    
        

            })
 
    }, [categoria ])

    return state

    // const [count, setcount] = useState(0)

    // useEffect( () => {

    //     getGifs( categorie )
    //     console.log(11111)

    // }, []) 

    // useEffect(() => {


    //Nuestro getGifs, si todo se resuelve correctamente ya que es async, nos devuelve los gifs, pero para eso, al llamarlo, tenemos que ejecutar un await o usar el .then para esperar a que todo se resuelva y tener la información.

    // El useEffect como tal no puede ser async, por lo que no podemos usar el await del getGifs, es por eso que usamos el .then (que sí podemos usarlo dentro del useEffect) para esperar a que se resuelva y poder hacer el setImages.
        
        
        
    //     // Saludos.

    //     // Si quieres usar el async y el await dentro de ese hook, debes hacerlo así

    //     // useEffect( () => {
        
    //     //     async function fetchData() {
    //     //         const imgs = await getGifs( category );
    //     //         setImages( imgs );
    //     //     }
        
    //     //     fetchData();
        
    //     // }, [category])

    //     // Esto es lo mismo que
    //     //  getGifs(categorie).then( img =>( setimages(img))
    //    getGifs(categorie).then( img =>( setimages(img))
    //    )
    // }, [categorie])



    




}