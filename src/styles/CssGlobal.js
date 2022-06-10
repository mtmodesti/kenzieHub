import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        
        outline: 0;
        
        font-family: "Inter", sans-serif;
        
        margin:0;
    }
    
    :root{
        --primaryPink:#ff577f;
        --primaryFocusPink:#ff427f;
        --primaryNegativePink: #59323f;
        --gray-4: #121214;
        --gray-3: #212529;
        --gray-2: #343b41;
        --gray-1: #868e96;
        --gray-0: #f8f9fa;
        --sucessPalette: #3fe864;
        --negativePalette: #e83f5b;
    }

    body{
        background: var(--gray-4);
        color: var(--gray-0);
        display:flex;
        justify-content:center
    }
    li{
        list-style: none;
    }
    h1, h2, h3, h4{
        font-weight:bold;
    }
    button{
        cursor:pointer;
    }

    a{
        text-decoration: none;
    }
    .hidden{
        display:none;
    }

}
`
