import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Reference } from "@components/Reference";
import { useState, useCallback } from "react";
import * as S from "./styles";
import { FlatList } from 'react-native'
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { GroupGetAll } from "@storage/group/Group";


export function Groups(){
    const [Groups, setGroups] = useState<string[]>([])
    const navigation = useNavigation()

    function handleCreateNewGroup(){
        navigation.navigate('newGroup')
    }

    async function FetchGroups(){
        try{
            const data = await GroupGetAll()
            setGroups(data)
        }catch(error){
            console.log(error)
        }
    }

    function handleOpenGroup(group: string){
        navigation.navigate('players', { group })
    }

    useFocusEffect(useCallback(() => {
        FetchGroups()
    }, []))

    return(
        <S.Container>
            <Header showBackButton={false} />
            <Reference title="Turmas" subTitle="jogue com a sua turma" />

            <FlatList 
                data={Groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard 
                        onPress={() => handleOpenGroup(item)}
                        title={item}

                    />
                )}
                contentContainerStyle={Groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="Cadastre a primeira turma "
                    />
                )}
            />

            <Button onPress={handleCreateNewGroup} title="Criar nova turma"/>
        </S.Container>
    )
}