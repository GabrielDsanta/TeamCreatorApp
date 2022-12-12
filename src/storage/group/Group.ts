import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig"

export async function CreateGroup(group: string){
    try{
        const existingGroups = await GroupGetAll()
        const newStorage = JSON.stringify([...existingGroups, group])

        await AsyncStorage.setItem(GROUP_COLLECTION, newStorage)
    }catch(error){
        throw error
    }
}

export async function GroupGetAll(){
    try{
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

        const groups: string[] = storage ? JSON.parse(storage) : []

        return groups
    }catch(error){
        throw error
    }
}

export async function RemoveGroupByName(name: string){
    try{
        const storedGroups = await GroupGetAll()
        const groups = storedGroups.filter((item) => item !== name)

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${name}`)
    }catch(error){
        throw error
    }
}
