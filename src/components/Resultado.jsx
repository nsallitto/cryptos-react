import styled from "@emotion/styled"

//----------------------------------STYLES-----------------------------------//
//---------------------------------------------------------------------------//
const Contenedor = styled.div`
    color: #FFF;
    font-family: "lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Img = styled.img`
    display: block;
    width: 120px;
    
`
const Texto = styled.p`
    font-size  : 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size  : 24px;
  span {
    font-weight: 700;
    }
`
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//

function Resultado({ resultado }) {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = resultado;

    return (
        <Contenedor>
            <Img 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen-cripto" 
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 hs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado