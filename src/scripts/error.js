import { handleBackButton } from "./render.js";

const setupButton = () =>{
    const button = document.querySelector('button');

    handleBackButton(button);
}

setupButton()