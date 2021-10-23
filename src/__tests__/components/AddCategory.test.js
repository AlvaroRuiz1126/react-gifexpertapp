import React from 'react'
import AddCategory from "../../Components/AddCategory";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";

describe('Pruebas del componente AddCategory', () => {
    const setCategories = jest.fn();
    //const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {
            target: {
                value
            }
        }); 
    });

    test('No debe de postear la información onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //para saber si una funcion se ejecuta o no
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Se debe llamar el submit y limpiar el input', () => {
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'Naruto'
            }
        });

        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(input.text()).toBe('');
    });
});
