import React from 'react';
import GifExpertApp from '../GiftExpertApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas del componente GifExpertApp', () => {
    test('Hace match con el snapshot del componente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorías', () => {
        const categories = ['naruto', 'Dragon ball z'];
        const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    
})
