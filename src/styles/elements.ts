import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: white;
    border-radius: .5em;
    padding: 1em .5em;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    width: 240px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);

    img{
        margin: 0 auto;
        width: 150px;
        height: 150px;
    }

    button{
        background-color: #4C6EF5;
        color: white;
        border: none;
        border-radius: .5em;
        padding: 1em .5em;

       
    }

    button:hover{
            background-color: #5b86fc;
            cursor: pointer;
        }

    h4{
        font-size: 15px;
        font-weight: bold;
        margin-left: 10px;
    }
    
    p{
        font-size: 15px;
        margin: 1em 0;
        margin-left: 10px;
    }
`

export const SHeader = styled.header`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .5em 1em;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-bottom: 1em;

    h1{
        font-size: 18px;
    }

    input{
        border: none;
        border-radius: .5em;
        padding: .5em 1em;
        font-size: 15px;
        background-color: #f2f2f2;
    }

    input:focus{
        outline: 1px solid black;
    }
`

export const SMain = styled.main`
    background-color: #F2F2F2;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto;
`