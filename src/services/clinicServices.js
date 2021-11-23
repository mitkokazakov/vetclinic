export const loginUser = (user) => {

    const url = 'https://localhost:44384/auth/login';

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

    const url = 'https://localhost:44384/auth/user';

    const finalUrl = url + `/${token}`;

    return fetch(finalUrl)
        .then(result => result.json())
        .catch(err => console.log(err));
}

export const registerUser = (user) => {

    const url = 'https://localhost:44384/auth/register';

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
    }).catch(err => console.log(err))
}

export const getAllUsers = () => {

    const url = 'https://localhost:44384/auth/allusers';

    return fetch(url)
        .then(result => result.json())
        .catch(err => console.log(err));
}

export const getUserById = (userId) => {

    const url = 'https://localhost:44384/auth/getuserbyid/' + userId;

    return fetch(url)
        .then(result => result.json())
        .catch(err => console.log(err));
}

export const changerUserInfo = (userInfo) => {

    const url = 'https://localhost:44384/auth/changeuser';

    return fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
        .catch(err => console.log(err))
}

export const addPet = (userId,petInfo) => {

    const url = 'https://localhost:44384/pets/addpet/' + userId;

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petInfo)
    }).catch(err => console.log(err));

}

export const getAllPets = () => {

    const url = 'https://localhost:44384/pets/getallpets';

    return fetch(url)
        .then(result => result.json())
        .catch(err => console.log(err));
}

export const getPetsByUser = (userId) => {

    const url = 'https://localhost:44384/pets/getpetsbyuser/' + userId;

    return fetch(url)
        .then(result => result.json())
        .catch(err => console.log(err));
}