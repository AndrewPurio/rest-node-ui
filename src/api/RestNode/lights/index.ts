import { baseUrl } from "../constants"
import { Lights, LightsQuery } from "./types"

export const requestLights = async (type: Lights, query: LightsQuery) => {
    const url = new URL(`/lights/${type}`, baseUrl)
    const config: RequestInit = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    }

    try {
        const fetchedData = await fetch(url.toString(), config)
        const jsonData = await fetchedData.json()

        if (fetchedData.status >= 400) {
            throw new Error(jsonData.message)
        }

        return jsonData
    } catch (error) {
        throw error
    }
}