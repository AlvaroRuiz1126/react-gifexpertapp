import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas del custom Hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('naruto'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        //const {data, loading} = useFetchGifs('naruto');
        //console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe retornar un arreglo de imagenes y loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('naruto'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })
    
});
