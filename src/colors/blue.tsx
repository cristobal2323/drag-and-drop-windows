
import { FC } from 'react';
import Container from "../widgets/Container";
import Item from "../widgets/Item";


interface Props {
    name: string
}


export const BlueComponent: FC<Props> = ({ name }) => {
    return (
        <div id="container" className="bg-blue-500 w-full h-screen">
            <Container id="container-2">
                <h2>Drop</h2>
            </Container>
        </div>
    )
}

