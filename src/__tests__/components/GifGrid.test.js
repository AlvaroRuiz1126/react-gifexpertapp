import React from 'react'
import GifGrid from '../../Components/GifGrid'; '../../Components/GifGrid';
import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    //let wrapper = shallow(<GifGrid categories={'naruto'} />);

    /* beforeEach(() => {
        wrapper = shallow(<GifGrid categories={'naruto'} />);
    }); */

    test('Hace match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid categories={'naruto'} />);
        expect(wrapper).toMatchSnapshot();
    }); 

    test('Debe de mostrar items cuando se cargan iamgenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost',
            title: 'Lo que sea'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid categories={'naruto'} />);
        //No se quiere evaluar el snapShot
        expect(wrapper).toMatchSnapshot();
        //Se quiere evaluar si existe algun parrafo p, esto por si la data viene el texto loading desaparece
        expect(wrapper.find('p').exists()).toBe(false);
        //Ademas, al evaluar cuantos componentes renderiza, hace que sea una prueba mucha mas precisa
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
