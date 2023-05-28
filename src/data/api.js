import axios from "axios";

const headers = {
    apiKey: 'qH1qdehmgDxPPBhxzKnVTw6r57nmwnzHmreJgaaI'
}

// получаю список валют
export const getCurrencyList = async () => {
    try {
        const response = await axios.get('https://api.freecurrencyapi.com/v1/latest', {headers});
        return response.data.data
    }
    catch (e) {
        console.log(e)
    }
}