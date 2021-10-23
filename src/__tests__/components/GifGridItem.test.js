import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../Components/GifGridItem'

describe('Pruebas de Gif App', () => {
    const title = 'Título';
    const url = 'http://localhost.com';
    let wrapper = shallow( <GifGridItem title={title} url={url} /> );

    beforeEach(() =>{
        wrapper = shallow( <GifGridItem title={title} url={url} /> );
    });

    test('Hacer match con el component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title); 
    });

    test('Debe ser una imagen', () => {
        const img = wrapper.find('img');
        //para ver el html del elemento encontrado
        //console.log(img.html());
        //para ver los atributos o properties
        //console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe de tener animate_fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        expect(true).toBe(div.prop('className').includes('animate__fadeIn'));
    });
    
});
