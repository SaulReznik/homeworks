let ul = document.getElementById('ul');
let loadMore = document.getElementById('loadMore');
let pics = 30;

fetch(`https://api.github.com/users?page=${pics}`)
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            const login = document.createElement('span');
            const image = document.createElement('img');
            const link = document.createElement('a');
            login.innerText = user.login;
            image.src = user.avatar_url;
            image.width = 200;
            link.href = user.html_url;
            link.appendChild(image);
            li.appendChild(login);
            li.appendChild(link);
            ul.appendChild(li);
        })
    });


loadMore.addEventListener(
    "click",
    () => {
        ul.innerHTML = "";
        pics += 30;
        fetch(`https://api.github.com/users?per_page=${pics}`)
            .then(response => response.json())
            .then(users => {
                users.forEach(user => {
                    const li = document.createElement('li');
                    const login = document.createElement('span');
                    const image = document.createElement('img');
                    const link = document.createElement('a');
                    login.innerText = user.login;
                    image.src = user.avatar_url;
                    image.width = 200;
                    link.href = user.html_url;
                    link.appendChild(image);
                    li.appendChild(login);
                    li.appendChild(link);
                    ul.appendChild(li);
                })
            })
    }
)
 