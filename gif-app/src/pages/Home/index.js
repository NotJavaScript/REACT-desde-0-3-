import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGif";
import "./style.css"
const POPULAR_GIFS = ["Gatos", "Perros", "Caballos"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()
                    
    const handleSubmit = evt => {
        evt.preventDefault()
        // Navega a otra ruta diferente.
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return ( // En JSX (React) los <> </> es una forma de abreviar React.Fragment, que sirven para agrupar elementos JSX y devolverlos sin añadir nada
             // al DOM como un <div></div>. Usando <> </> esas llaves a la hora de plasmar el código son invisibles y solo devuelven el contenido.
        <> 
        <form onSubmit={handleSubmit}>
            <input placeholder="Busca un GIF aqui..." onChange={handleChange} type='text' value={keyword}/>
            {/* <input type="submit" value="Buscar"/> Esto es mucho más trabajo que hacer un simple button y ambos hacen lo mismo. Atrapan el evento submit.*/}
            <button>Buscar</button>
        </form>
        <h3 className="App-title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs}/>
        <h3 className="App-title">Los gifs más populares</h3>
        <ul>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}