import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

//----------------------------------STYLES-----------------------------------//
//---------------------------------------------------------------------------//
const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        cursor: pointer;
        background-color: #7a7dfe;

    }
`
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//

function Formulario({setMonedas}) {

    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);
    
    
    //NUESTRO HOOK
    // [0, 1, 2] RECIBE POR INDICE, NO POR NOMBRE 
    const [moneda, SelectMonedas] = useSelectMonedas("Elije tu Moneda", monedas);
    const [cryptomoneda, SelectCryptomoneda] = useSelectMonedas("Elije tu Cryptomoneda", cryptos);
    //------------------------//
    //-----------------------//


    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(crypto => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return (objeto)
            })
            setCryptos(arrayCriptos)
        }
        consultarAPI();
    }, [])

    //VALIDAMOS FORMULARIO
    const handleSubmit = (e) => {
        e.preventDefault()

        if ([moneda, cryptomoneda].includes("")) {
            setError(true);
            return
        }
        setError(false)
        setMonedas({
            moneda,
            cryptomoneda
        })
    }

    //---------------------------------------------------------------------------//
    //-----------------------------------RETURN----------------------------------//
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >

                <SelectMonedas />
                <SelectCryptomoneda />

                <InputSubmit
                    type="submit"
                    value="cotizar"
                />

            </form>
        </>
    )
}

export default Formulario