import axios from "axios";

const host = 'https://localhost:44384';

export const loginUser = (user) => {

    const url = host + '/auth/login';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export const getUser = (token) => {

    const url = host + '/auth/user';

    const finalUrl = url + `/${token}`;

    return fetch(finalUrl)
        .then(result => result.json())
        .catch(err => console.log(err));
}

export const registerUser = (user) => {

    const url = host + '/auth/register';

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
    });
}

export const getAllUsers = () => {

    const url = host + '/auth/allusers';

    return fetch(url)
        .then(result => result.json());
}

export const findUsersByName = (userName) => {

    const url = host + '/auth/findusersbyname/' + userName;

    return fetch(url)
        .then(result => result.json());
}

export const getUserById = (userId) => {

    const url = host + '/auth/getuserbyid/' + userId;

    return fetch(url)
        .then(result => result.json());
}

export const changerUserInfo = (userInfo) => {

    const url = host + '/auth/changeuser';

    return fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
}

export const addPet = (userId,petInfo) => {

    const url = host + '/pets/addpet/' + userId;

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

    const url = host + '/pets/deletepet/' + petId;

    return fetch(url,{
        method: "DELETE"
    });
}

export const changePet = (petId, petInfo) => {

    const url = host + '/pets/changepet/' + petId;

    return  axios.put(url,petInfo);
}

export const getAllPets = () => {

    const url = host + '/pets/getallpets';

    return fetch(url)
        .then(result => result.json());
}

export const findPetsByName = (petName) => {

    const url = host + '/pets/findpetsbyname/' + petName;

    return fetch(url)
        .then(result => result.json());
}

export const getPetsByUser = (userId) => {

    const url = host + '/pets/getpetsbyuser/' + userId;

    return fetch(url)
        .then(result => result.json());
}

export const getPetById = (petId) => {

    const url = host + '/pets/getpetbyid/' + petId;

    return fetch(url)
        .then(result => result.json());
}

export const addVisitation = (petId, visitation) => {

    const url = host + '/pets/addvisitation/' + petId;

    return fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(visitation)
    });
}

export const getVisitations = (petId) => {

    const url = host + '/pets/getvisitations/' + petId;

    return fetch(url)
        .then(result => result.json());
}

