import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultcategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        console.log( wrapper.find('GifGrid').length,categories.length)
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

        
    })
    

})
