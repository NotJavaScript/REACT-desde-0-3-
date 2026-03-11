import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGif";

function SearchResults({params}) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

    // -------------------------------------------------------------
    // Código sin el hook del index de SearchResults
    // const [loading, setLoading] = useState(false)
    // const [gifs, setGifs] = useState([])

    // El useEffect es un efecto que se ejecuta cada vez que se renderiza el componente.
    // useEffect(function () {
    //     setLoading(true)
    //     getGifs({ keyword })
    //         .then(gifs => {
    //             setGifs(gifs)
    //             setLoading(false)
    //         })
    // }, [keyword]) // Lo que estamos queriendo decir con este método es que queremos que este efecto se ejecute cada vez que se detecte una keyword.
                     // La keyword en el contexto de nuestra página es lo que buscar en el formulario o el valor de los links cuando quieres meterte a alguno.
    // -------------------------------------------------------------

    return <>
        { loading
        ? "Cargando..."
        : <ListOfGifs gifs={gifs}/>
        }
    </>
}

// Utilizamos el export default React.memo(${nombreFuncion}) como forma de optimizar el código y que el useEffect se tenga que renderizar menos veces.
// Esto lo podemos comprobar colocando en el código un console.log("${textoDePrueba}");
// Aunque en este caso en particular no funciona el React.memo y funciona igual que poniendo el export default de manera normal.
export default React.memo(SearchResults)