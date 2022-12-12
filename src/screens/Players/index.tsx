import { ButtonIcon } from "@components/ButtonIcon"
import { Filter } from "@components/Filter"
import { Header } from "@components/Header"
import { TextInput } from "@components/InputText"
import { Reference } from "@components/Reference"
import { Container, Form, HeaderList, AmountPlayers } from "./styles"
import { FlatList, Keyboard } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState, useEffect } from "react"
import { PlayerCard } from "@components/PlayerCard"
import { ListEmpty } from "@components/ListEmpty"
import { Button } from "@components/Button"
import { PlayerAddByGroup, GetPlayersByGroupAndTeam, PlayerStorageData, RemovePlayerByGroup } from "@storage/player/Player"
import { RemoveGroupByName } from "@storage/group/Group"

type RouteParams = {
    group: string
}


export function Players(){
    const [Team, setTeam] = useState("Time A")
    const [Players, setPlayers] = useState<PlayerStorageData[]>([])
    const [PlayerTextName, setPlayerTextName] = useState("")
    const navigation = useNavigation()

    const route = useRoute()
    const { group } = route.params as RouteParams

    async function handleAddPlayer(){
        const newPlayer = {
            name: PlayerTextName,
            team: Team
        }

        await PlayerAddByGroup(newPlayer, group)
        GetPlayersByTeam()
        Keyboard.dismiss()
        setPlayerTextName("")
    }

    async function GetPlayersByTeam(){
        try{
            const playersByTeam = await GetPlayersByGroupAndTeam(group, Team)
            setPlayers(playersByTeam)

        }catch(error){
            throw error
        }
    }

    async function handleRemovePlayer(name: string){
        try{
            await RemovePlayerByGroup(name, group)
            GetPlayersByTeam()
        }catch(error){
            throw error
        }
    }

    async function handleRemoveGroup(){
        RemoveGroupByName(group)
        navigation.navigate("groups")
    }

    useEffect(() => {
        GetPlayersByTeam()
    }, [Team])

    return(
        <Container>
            <Header showBackButton/>

            <Reference title={group} subTitle="adicione a galera e separe os times"/>

            <Form>
                <TextInput 
                    placeholder="Nome da pessoa" 
                    autoCorrect={false}
                    onChangeText={setPlayerTextName}
                    value={PlayerTextName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <ButtonIcon onPress={handleAddPlayer} icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            title={item}
                            isActive={item === Team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal={true}
                />

                <AmountPlayers>
                    {Players.length}
                </AmountPlayers>
            </HeaderList>

            <FlatList
                data={Players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard 
                        name={item.name}
                        RemovePlayer={() => handleRemovePlayer(item.name)}
                    />
                )}

                ListEmptyComponent={() => (
                    <ListEmpty message="Não há pessoas nesse time" />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    Players.length === 0 && { flex: 1 }
                ]}
            />

            <Button type="SECONDARY" title="Remover Turma" onPress={handleRemoveGroup} />

        </Container>
    )
}