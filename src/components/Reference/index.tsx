import { Container, SubTitle, Title } from "./styles";

type ReferenceProps = {
    title: string
    subTitle: string
}



export function Reference({ title, subTitle }: ReferenceProps){
    return(
        <Container>
            <Title>
                {title}
            </Title>

            <SubTitle>
                {subTitle}
            </SubTitle>
        </Container>
    )
}