const baseUrl = "http://localhost:5000"

export const getAudioFolders = async () => {
    const url = new URL("/sound/static", baseUrl)

    try {
        const fetchedData = await fetch(url.toString())
        const jsonData = await fetchedData.json()

        return jsonData
    } catch (error) {
        throw error
    }
}

export const getAudioFiles = async (folder: string) => {
    const url = new URL(`/sound/folder/${folder}`, baseUrl)

    try {
        const fetchedData = await fetch(url.toString())
        const jsonData = await fetchedData.json()

        return jsonData
    } catch (error) {
        throw error
    }
}