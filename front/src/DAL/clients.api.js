import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:3004"

});


export const clientsAPI = {
    getClients() {
        return instance.get("clients");
    }

};
