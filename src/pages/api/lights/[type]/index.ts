import { NextApiRequest, NextApiResponse } from "next";

interface LightInterface {
    state: "ON" | "OFF"
    brightness: number
}

const lights = (request: NextApiRequest, response: NextApiResponse<LightInterface>) => {
    const { query } = request

    console.log(query)

    response.json({
        state: "ON",
        brightness: 100
    })
}

export default lights