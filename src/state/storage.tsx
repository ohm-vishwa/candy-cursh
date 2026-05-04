import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
    id: 'user_storage',
    encryptionKey: 'ohm'
})

export const mmkvStorage = {
    setItem: (key: string, value: any) => {
        storage.set(key, value)
    },
    getItem: (key: string) => {
        const value = storage.getString(key);
        return value ?? null;
    },
    removeItem: (key: string) => {
        storage.remove(key)
    }
}