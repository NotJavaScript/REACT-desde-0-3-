import { useContext } from "react";
// import StaticContext from "../../context/StaticContext";
// import GifsContext from "../../context/GifsContext";
import Gif from "../../components/Gif/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params }) {
    // const staticConfig = useContext(StaticContext)
    // console.log(staticConfig)

    const gifs = useGlobalGifs() // Nos pasan los datos de nuestros GIFs por consola.
    

    const gif = gifs.find(singleGif => singleGif.id === params.id) // Nos busca el gif al que hemos hecho click y nos lo enseña.
    console.log(gif)

    // console.log(params.id)
    return <Gif {...gif}/> // Devuelve dicho GIF clicado clonado.
}