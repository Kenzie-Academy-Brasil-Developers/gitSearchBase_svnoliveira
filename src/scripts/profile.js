import { renderUser } from "./render.js";

const startProfile = () => {
    const userData = localStorage.getItem('user');
    if (userData == null) {
        location.replace('../../index.html');
    } else {
        renderUser(JSON.parse(userData))
    }
}

startProfile();