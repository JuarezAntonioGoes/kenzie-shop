import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const CssGlobal = createGlobalStyle`
  ${reset}

  body{ 
    --color-primary: #252525;
    --color-secundary: #fff;
    --color-theme: #007aff;

    font-size: 16px;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    background-color: var(--color-secundary);
  }

  a{ 
    text-decoration: none;
    color: var(--color-primary);
    cursor: pointer;
  }
`;

export default CssGlobal;
