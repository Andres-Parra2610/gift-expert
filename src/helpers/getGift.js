export const getGift = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FubSN4n3zeh9rApStntV7y4bX2AwaQ2f`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif =>{
        return{
            id: gif.id,
            title: gif.title,
            img: gif.images.downsized_medium.url
        }
    })
    return gifs;
}