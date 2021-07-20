import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas en getGifs', () => {
    
    test('Debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs('One Pun0ch')


        expect( gifs.length).toBe(10)

    })

    test('Debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs('')

        console.log(gifs)    


    })    

})
