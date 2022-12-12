import { Container, Message } from "./styled";


type ListEmptyProps = {
    message: string
}

export function ListEmpty({ message }: ListEmptyProps){
    return(
        <Container>
            <Message>
                {message}
            </Message>
        </Container>
    )
}