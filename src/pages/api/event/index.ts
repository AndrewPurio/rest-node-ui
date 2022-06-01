import { NextApiRequest, NextApiResponse } from "next";

interface EventInterface {
    name: string
}

const event = (request: NextApiRequest, response: NextApiResponse<EventInterface>) => {
    response.json({
        name: "Test"
    })
}

export default event