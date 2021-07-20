import React from 'react';
import {shallow} from "enzyme"
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />) 

    test('Debe de mostrar el componente correctamente ', () => {
           
            expect(wrapper).toMatchSnapshot()

    })
    

    test('Debe de tener un parrafo con el titulo ', () => {

        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe(title)

    })

    test('Debe de tener una imagen igual al url y alt del props', () => {

        const img = wrapper.find('img')
        // console.log(img.props('src'))
        expect( img.prop('src')).toBe(url)
        // expect( img.prop('title')).toBe(title)
        

    })

    test('Debe de tener uanimate__fadein', () => {

        const div = wrapper.find('div')
        const className = div.prop('className')
        
        console.log(className)
        expect( className.includes('animate__fadein')).toBe(true)

        // expect( div.prop('classname')).toBe(url)


    })


 
    


})




