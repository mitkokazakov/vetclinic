import axios from "axios";
import { useEffect } from "react";

export const loginUser = (user) => {

    const url = 'https://localhost:44384/auth/login';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
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
    });
}

export const getAllUsers = () => {

    const url = 'https://localhost:44384/auth/allusers';

    return fetch(url)
        .then(result => result.json());
}

export const findUsersByName = (userName) => {

    const url = 'https://localhost:44384/auth/findusersbyname/' + userName;

    return fetch(url)
        .then(result => result.json());
}

export const getUserById = (userId) => {

    const url = 'https://localhost:44384/auth/getuserbyid/' + userId;

    return fetch(url)
        .then(result => result.json());
}

export const changerUserInfo = (userInfo) => {

    const url = 'https://localhost:44384/auth/changeuser';

    return fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
}

export const addPet = (userId,petInfo) => {

    const url = 'https://localhost:44384/pets/addpet/' + userId;

    // return fetch(url, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(petInfo)
    // }).catch(err => console.log(err));

    return  axios.post(url,petInfo);

}

export const deletePet = (petId) => {

    const url = 'https://localhost:44384/pets/deletepet/' + petId;

    return fetch(url,{
        method: "DELETE"
    });
}

export const changePet = (petId, petInfo) => {

    const url = 'https://localhost:44384/pets/changepet/' + petId;

    return  axios.put(url,petInfo);
}

export const getAllPets = () => {

    const url = 'https://localhost:44384/pets/getallpets';

    return fetch(url)
        .then(result => result.json());
}

export const findPetsByName = (petName) => {

    const url = 'https://localhost:44384/pets/findpetsbyname/' + petName;

    return fetch(url)
        .then(result => result.json());
}

export const getPetsByUser = (userId) => {

    const url = 'https://localhost:44384/pets/getpetsbyuser/' + userId;

    return fetch(url)
        .then(result => result.json());
}

export const getPetById = (petId) => {

    const url = 'https://localhost:44384/pets/getpetbyid/' + petId;

    return fetch(url)
        .then(result => result.json());
}

export const addVisitation = (petId, visitation) => {

    const url = 'https://localhost:44384/pets/addvisitation/' + petId;

    return fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitation)
    });
}

export const getVisitations = (petId) => {

    const url = 'https://localhost:44384/pets/getvisitations/' + petId;

    return fetch(url)
        .then(result => result.json());
}

