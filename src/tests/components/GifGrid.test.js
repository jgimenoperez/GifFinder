import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchgifs } from '../../hooks/useFetchgifs';
jest.mock('../../hooks/useFetchgifs');


describe('Pruebas en el Gifgrid', () => {

    const categorie = "One Punch"
    
    test('Debe de mostarse correctamente ', () => {


        useFetchgifs.mockReturnValue({

            data:[],
            loading: true
        })


        const wrapper = shallow (<GifGrid categorie={categorie}/>)
        expect( wrapper ).toMatchSnapshot()

        
    })


    test('debe de mostrar items cuando se cargan imagenes userFetch', () => {

        const gifs =[{

            id: '123',
            url: 'https:\\www.manosdehada.es ' ,
            title: 'lo que sea'

        }]    


        useFetchgifs.mockReturnValue({

            data:gifs,
            loading: false
        })
        
        const wrapper = shallow (<GifGrid categorie={categorie}/>)

        expect ( wrapper ).toMatchSnapshot();
        expect( wrapper.find('P').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
    
    

})
