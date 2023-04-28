export const handleInput = () => {
const input = document.querySelector('#main__container--right > form > input');
const button = document.querySelector('#main__container--right > form > button');

localStorage.clear();

button.addEventListener('click', async (event) => {
    event.preventDefault()
    const user = input.value;

    findUser(user);
})
}

export const findUser = async (username) => {
    const userData = await fetch(`https://api.github.com/users/${username}`, {
        method:"GET"
    })
    .then( async (res) => {
        if (res.ok){
            const response = await res.json()
            localStorage.setItem('user', JSON.stringify(response))
            location.replace('../src/pages/profile.html');
        } else {
        location.replace('../src/pages/error.html');
        }
    })
    return userData;
}