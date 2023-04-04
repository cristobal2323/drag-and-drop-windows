
import { FC } from 'react';
import Container from "./widgets/Container";


interface Props {
   
}


const DropComponent: FC<Props> = ({ }) => {
    return (
        <section className="w-full h-screen"> 
            <Container id="container-2" colors={{main: "bg-cyan-200", hover: "bg-cyan-100"}}>
                <h2 className="text-black mb-3 text-xl">Container (Drop)</h2>
            </Container>
        </section>
    )
}


export default DropComponent