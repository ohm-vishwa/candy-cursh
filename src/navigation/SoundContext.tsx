import React, { createContext, useState, useContext, ReactNode } from 'react'
import Video from 'react-native-video';
import { playSound } from '../utils/SoundUtility';


interface SoundContextProps {
    playSound: (soundName: string, repeat: boolean) => void;
    stopSound: (soundName: string) => void;
}

interface SoundProviderProps {
    children: ReactNode;
}

const SoudContext = createContext<SoundContextProps | undefined>(undefined)

const soundPaths: { [key: string]: string } = {
    ui: require('../assets/sfx/ui.mp3'),
    candy_shuffle: require('../assets/sfx/candy_shuffle.mp3'),
    candy_clear: require('../assets/sfx/candy_clear.mp3'),
    bg: require('../assets/sfx/bg.mp3'),
    cheer: require('../assets/sfx/cheer.mp3'),
}

type SoundName = keyof typeof soundPaths;

const SoundProvider = ({ children }: SoundProviderProps) => {
    const [sounds, setSounds] = useState<any[]>([])
    const playSound = (soundName: SoundName, repeat: boolean) => {
        const soundPath = soundPaths[soundName]
        if (soundPath) {
            setSounds((prevSound) => {
                const updatedSounds = prevSound?.filter((sound) => sound.id !== soundName)
                return [
                    ...updatedSounds,
                    {
                        id: soundName,
                        Path: soundPath,
                        repeat
                    }
                ]
            })
        } else {
            console.error(`Sound ${soundName} not found`)
        }

    }


    const stopSound = (soundName: String) => {
        setSounds((prevSounds) => prevSounds.filter((sound) => sound.id !== soundName))
    }


    return (
        <SoudContext.Provider value={{ playSound, stopSound }}>
            {children}
            {sounds?.map((sound) => (
                <Video key={sound.id}
                    source={sound.Path}
                    paused={false}
                    repeat={sound.repeat}
                    volume={0.4}
                    muted={false}
                    resizeMode='cover'
                    style={{ position: 'absolute', width: 0, height: 0 }}
                />
            ))}
        </SoudContext.Provider>
    )
}

const useSound = (): SoundContextProps => {
    const context = useContext(SoudContext)
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider')
    }
    return context
}

export { SoundProvider, useSound }