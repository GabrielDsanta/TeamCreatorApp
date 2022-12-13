import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig"

export async function CreateGroup(group: string){
    const existingGroups = await GroupGetAll()
    const newStorage = JSON.stringify([...existingGroups, group])

    await AsyncStorage.setItem(GROUP_COLLECTION, newStorage)
}

export async function GroupGetAll(){
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    const groups: string[] = storage ? JSON.parse(storage) : []

    return groups
}

export async function RemoveGroupByName(name: string){
    const storedGroups = await GroupGetAll()
    const groups = storedGroups.filter((item) => item !== name)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${name}`)
}
