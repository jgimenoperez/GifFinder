import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import { GifGridItem } from '../../components/GifGridItem';

// const wrapper = shallow(<GifGridItem />) 

describe('Pruebas en <AddCategory />', () => {

    const setcategories = jest.fn()
    let wrapper = shallow(<AddCategory setcategories={setcategories} />) 
   

    beforeEach( () =>{

        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setcategories={setcategories} />) 

    })
    
    test('Debe de mostrarse correctamente ', () => {   
        expect(wrapper).toMatchSnapshot()   
    })
    
    test('Debe de cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        const value3 = 'Hola Mundo3'
        input.simulate('change',{ target:{value}})   

        console.log("aaa",wrapper.find('p').text().trim() )

        expect( wrapper.find('p').text().trim() ).toBe( value  )


    })
    

    test('No debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault: ()=>{}  })

        expect( setcategories ).not.toHaveBeenCalled(); 

    })
    

    test('debe de llamar el setcategorie y limpiar la caja de texto', () => {

        //1 simular el imputchange
        const input =  wrapper.find('input')
        const value = 'Hola 123'
        input.simulate('change',{ target:{value}})   
        // expect( wrapper.find('p').text().trim() ).toBe( value  )
        expect( input.prop('value')).toBe('')



        //2 simular el submit
        wrapper.find('form').simulate('submit',{preventDefault:()=>{} } )
        expect( setcategories ).toHaveBeenCalled(); 


        //3 setcatehgoires de debe de haber llamado
        //4 El valor del input debe de estar ''




        
    })    
    
})
