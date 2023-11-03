import styled from "@emotion/styled"

//----------------------------------STYLES-----------------------------------//
//---------------------------------------------------------------------------//
const Texto = styled.div`
    background-color: #b7322c;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "lato", sans-serif;
    font-weight: 700;
    text-align: center;
`
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//

function Error({children}) {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error