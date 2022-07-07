import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { getAudioFiles, getAudioFolders } from "../../api/RestNode/sound";

interface AudioFiles {
    [key: string]: string[]
}

interface AudioContextProvider {
    children?: ReactNode
}

interface ContextInterface {
    folders: string[]
}

const AudioContext = createContext<ContextInterface>({
    folders: []
})

export const useAudioContext = () => useContext(AudioContext)

export const AudioContextProvider: FC<AudioContextProvider> = ({ children }) => {
    const [folders, setFolders] = useState<string[]>([])
    const [audioFiles, setAudioFiles] = useState<AudioFiles>({})

    const fetchAudioFolders = async () => {
        try {
            const { files } = await getAudioFolders()

            setFolders(files)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAudioFiles = async () => {
        for (let index = 0; index < folders.length; index++) {
            const folder = folders[index]

            try {
                const files = await getAudioFiles(folder)

                setAudioFiles({
                    ...audioFiles,
                    [folder]: files
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchAudioFolders()
    }, [])

    useEffect(() => {
        fetchAudioFiles()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [folders])

    useEffect(() => {
        console.log("Audio Files:", audioFiles)

    }, [audioFiles])

    return (
        <AudioContext.Provider value={{
            folders
        }}>
            {children}
        </AudioContext.Provider>
    )
}