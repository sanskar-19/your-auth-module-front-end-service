import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_ML_URL;

export async function detectAlzheimer(payload) {
    let formData = new FormData();
    formData.append("scan", payload.scan[0])
    try {
        let response = await axios({
            method: "POST",
            baseURL: BASE_URL,
            url: "/alzheimer-detect-v1",
            data: formData,
            params: {
                "first_name": payload.first_name,
                "last_name": payload.last_name,
                "contact": payload.contact,
                "age": payload.age,
            },
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response;
    } catch (e) {
        throw e;
    }
}

