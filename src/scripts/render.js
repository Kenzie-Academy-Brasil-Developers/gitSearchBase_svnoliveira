export const handleBackButton = (button) =>{
    button.addEventListener('click', () => {
        location.replace('../../index.html');
    })
}

export const handleUserRepositories = async (username) =>{
    const list = await fetch(`https://api.github.com/users/${username}/repos`)
    .then(async (res) => {
        const response = await res.json()
        return response
    })
    return list
}

export const renderUser = async (user) => {

    const backButton = document.querySelector('header > div > button');
    const picture = document.querySelector('#header__profile-container > img');
    const userName = document.querySelector('#header__profile-container > h1');
    const cardContainer =  document.querySelector('#main__repository-cards___container > ul');

    
    handleBackButton(backButton);
    
    picture.src = user.avatar_url;
    userName.innerText = user.name;
    
    const repositoryList = await handleUserRepositories(user.login)
    .then( async (res) =>{
        const response = await res
        return response
    })
    
    cardContainer.innerHTML = '';

    repositoryList.forEach(repository => {
        const card = document.createElement('li');
        const repositoryName = document.createElement('h2');
        const repositoryDescription = document.createElement('p');
        const repositoryButton = document.createElement('button');
        
        card.classList.add('main__repository-card');
        repositoryName.innerText = repository.name;
        repositoryDescription.innerText = repository.description;
        repositoryButton.classList.add('button--outlined');
        repositoryButton.innerText = 'Repositório';

        repositoryButton.addEventListener('click', ()=>{
            open(repository.html_url, '_blank');
        })
        
        cardContainer.appendChild(card);
        card.append(repositoryName, repositoryDescription, repositoryButton);
    });
}