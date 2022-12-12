import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { TextInput } from "@components/InputText";
import { Reference } from "@components/Reference";
import { Container, Content, Icon } from "./styles";
import { useTheme } from "styled-components/native"
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";
import { CreateGroup } from "@storage/group/Group";


export function NewGroup(){
    const { COLORS } = useTheme()
    const navigation = useNavigation()
    const [Group, setGroup] = useState("")

    async function handleCreateNewGroup() {
       try{
            await CreateGroup(Group)
            navigation.navigate('players', { group: Group })
       }catch(error){
            console.log(error)
       }
    }

    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Reference title="Nova turma" subTitle="crie a turma para adicionar as pessoas" />

                <TextInput 
                placeholderTextColor={COLORS.GRAY_300}
                placeholder="Nome da turma"
                onChangeText={setGroup}
                />
                <Button onPress={handleCreateNewGroup} title="Criar" />
            </Content>

        </Container>
    )
}