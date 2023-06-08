import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
	    font-family: sans-serif;
        background-color: ${props => props.color ? 'white' : '#20222F'};
        transition: 0.4s all ease;
    }

`;

export {GlobalStyles};