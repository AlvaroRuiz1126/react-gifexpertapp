export const getGifs = async(categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=bl7Iwya9mLLDOBnrA3IAVBMLcdX3Po6K`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //console.log(data);
    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    //console.log(gifs);
    return gifs;
};