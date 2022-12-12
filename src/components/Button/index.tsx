import { ButtonStyleProps, Container, Title } from "./styles";
import { TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
    title: string
    type?: ButtonStyleProps
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps){
    return(
        <Container type={type} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}