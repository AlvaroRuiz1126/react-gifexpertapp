import '@testing-library/jest-dom';
import { getGifs } from "../../helpers/getGifs";

describe('Pruebas para la petición de gifs', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('naruto');
        expect(gifs.length).toBe(10);
    });

    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
