import styled from "styled-components/native";
import { Crown, CaretLeft } from 'phosphor-react-native'


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const HeaderText = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.WHITE
}))``

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`

export const LogoHeader = styled(Crown).attrs(({ theme }) => ({
    size: 50,
    color: theme.COLORS.GREEN_700
}))``