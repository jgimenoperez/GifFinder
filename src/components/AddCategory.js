import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setcategories} ) => {

    const [inputvalue, setinputvalue] = useState(``)

    const handleImputChange=(e)=>{

            console.log('handleImputChange llamado')
            setinputvalue(e.target.value)
    }

    const hasdleSubmit=(e)=>{

            e.preventDefault()
            console.log('Handel submit')

            if (inputvalue.trim().length>2)
            {
                setcategories( cats => [inputvalue,...cats,]);      
                setinputvalue('')
            }
            // console.log('Submit hecho')
            
            // console.log(props.otracosa)
    }



    return (
        <div>

           <form onSubmit={hasdleSubmit}>

                <p>{inputvalue}</p>

                <input
                    type="text"
                    value={inputvalue}
                    onChange={ handleImputChange }
                />

            </form>    

            
        </div>
    )
}
 
AddCategory.propTypes = {

    setcategories:PropTypes.func.isRequired

}
