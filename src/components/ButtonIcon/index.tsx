import { ButtonIconStyleProps, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"


type ButtonIconProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconStyleProps
    onPress: () => void
}

export function ButtonIcon({ icon, type = "PRIMARY", onPress }: ButtonIconProps){
    return(
        <Container onPress={onPress}>
            <Icon 
            name={icon}
            type={type}
            />
        </Container>
    )
}