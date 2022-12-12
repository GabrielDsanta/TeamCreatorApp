import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, NamePlayer } from "./styles";

type PlayerCardProps = {
    name: string
    RemovePlayer: () => void
}


export function PlayerCard({ name, RemovePlayer }: PlayerCardProps){
    return(
        <Container>
            <Icon name="person" />

            <NamePlayer>
                {name}
            </NamePlayer>

            <ButtonIcon
             icon="close" 
             type="SECONDARY" 
             onPress={RemovePlayer}
             />
        </Container>
    )
}