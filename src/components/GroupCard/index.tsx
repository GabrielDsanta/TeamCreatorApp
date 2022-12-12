import { Container, LogoGroup, Title } from "./styles"
import { TouchableOpacityProps } from 'react-native'


type GroudCardProps = TouchableOpacityProps & {
    title: string

}

export function GroupCard({ title, ...rest }: GroudCardProps){
    return(
        <Container {...rest}>
            <LogoGroup />

            <Title>
                {title}
            </Title>
        </Container>
    )
}