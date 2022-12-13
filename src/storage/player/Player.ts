import AsyncStorage from "@react-native-async-storage/async-storage"
import { PLAYER_COLLECTION } from "@storage/storageConfig"

export type PlayerStorageData = {
    name: string
    team: string
}

export async function PlayerAddByGroup(newPlayer: PlayerStorageData, group: string){
    const storedPlayers = await GetPlayersList(group)
    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)   
}

export async function GetPlayersList(group: string){
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)
    const players: PlayerStorageData[] = storage ? JSON.parse(storage) : []

    return players
}

export async function GetPlayersByGroupAndTeam(group: string, team: string){
    const storage = await GetPlayersList(group)
    const players = storage.filter((item) => item.team === team)

    return players
}

export async function RemovePlayerByGroup(name: string, group: string){
    const storage = await GetPlayersList(group)
    const filteredGroup = storage.filter((item) => item.name !== name)
    const players = JSON.stringify(filteredGroup)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
}