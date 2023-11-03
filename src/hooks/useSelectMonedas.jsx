import styled from "@emotion/styled";
import { useState } from "react";

//---------------STYLES-----------------//

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: "lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`
//--------------------------------------//


function useSelectMonedas(label, opciones) {

    const [state, setState] = useState("");

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value) }
            >
                <option value="">Seleccione</option>

                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ) )}
            </Select>
        </>
    )

    return [state, SelectMonedas] // [] DEVUELVE POR INDICE, NO POR NOMBRE
}

export default useSelectMonedas