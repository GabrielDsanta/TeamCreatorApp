import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { RoutesConfig } from './app.routes'

export function Routes(){
    const theme = useTheme()
    const { COLORS } = theme
    return(
        <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
            <NavigationContainer>
                <RoutesConfig />
            </NavigationContainer>
        </View>
    )
}