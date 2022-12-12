import { TouchableOpacityProps } from 'react-native'
import { Container, FilterStyleProps, Title } from './styles'

type PropsFilter = TouchableOpacityProps & FilterStyleProps & {
    title: string
}

export function Filter({ title, isActive = false, ...rest}: PropsFilter){
    return(
        <Container isActive={isActive} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}