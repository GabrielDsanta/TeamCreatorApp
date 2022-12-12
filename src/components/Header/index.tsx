import { Container, BackIcon, LogoHeader, BackButton } from "./styles";
import { useNavigation } from '@react-navigation/native'

type Headerprops = {
    showBackButton?: boolean
}


export function Header({ showBackButton = false }: Headerprops){
    const navigation = useNavigation()
    function handleGoBack(){
        navigation.navigate('groups')
    }
    return(
        <Container>
            {showBackButton && 
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }

            <LogoHeader />
        </Container>
    )
}