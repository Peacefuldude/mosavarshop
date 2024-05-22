import { cardsProps } from "@/Types/Types";
import axios from "axios";

const BASE_URL = "https://api.coincap.io/v2/assets";
const jwtToken = "e4b4fead-1fb8-40d7-9ac2-051c887aa817";

const axiosConfig = {
    Authorization: "Bearer " + jwtToken,
    "Accept-Encoding": "gzip",
};

export function getAll() {
    axios
        .get(`${BASE_URL}`)
        .then((response) => {
            console.log(response);
        })

        .catch((errors) => {
            console.log(errors);
        });
}

export async function getSearch({ coinForCard }: cardsProps) {
    axios
        .get(`${BASE_URL}${coinForCard}`)
        .then((response) => {
            console.log(response);
        })
        .catch((errors) => {
            console.log(errors);
        });
}
