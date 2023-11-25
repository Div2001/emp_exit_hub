import axios from 'axios';
const url = "http://localhost:3000/employees/1";

export async function getData() {
    return await axios.get(`${url}`);
}


export async function putData(id, data) {
    return await axios.put(`${url}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


