
import { FC } from 'react';
import Container from "./widgets/Container";


interface Props {
   
}


const DropComponent: FC<Props> = ({ }) => {
    return (
        <div id="container" className="bg-blue-500 w-full h-screen">
            <Container id="container-2">
                <h2>Drop</h2>
            </Container>
        </div>
    )
}


export default DropComponent