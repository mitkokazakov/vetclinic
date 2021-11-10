export const loginUser = (user) => {

    const url = 'https://localhost:44373/auth/login';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .catch(err => console.log(err));
}

export const getUser = (token) => {

    const url = 'https://localhost:44373/auth/user';

    const finalUrl = url + `/${token}`;

    return fetch(finalUrl)
        .then(result => result.json())
        .catch(err => console.log(err));
}