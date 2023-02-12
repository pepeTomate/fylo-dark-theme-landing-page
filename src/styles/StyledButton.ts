import { Button } from "@mui/material";
import {styled} from "@mui/material/styles";

export const StyledButton= styled(Button)`
    /* background-color:  hsl(198, 60%, 50%); */
    background: linear-gradient(to right, hsl(192, 100%, 60%), hsl(198, 60%, 50%));
    border-radius: 2rem;
    color: white;
    min-width: 15rem;
    min-height: 3rem;

    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


    :hover {
        filter: brightness(120%);
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    & > a {
        text-decoration: none;
        color: white;
        text-transform: none;
        font-weight: 700;

    }

`