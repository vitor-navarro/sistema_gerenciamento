interface userObjectInterface {
    user: string;
    password: string;
    keepConnected: boolean;
}

export default function login(userObject: userObjectInterface) {
    const base_URL = process.env.API_BASE_URL;

    return fetch(base_URL + "auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    })
        .then(response => {
            return response.json()
        })
        .then(responseData => {
            if (responseData.redirectTo === undefined) {
                return responseData;
            } else {
                window.location.href = responseData.redirectTo;
                return responseData
            }

        });
}