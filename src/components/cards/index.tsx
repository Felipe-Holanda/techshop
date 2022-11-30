import { CardContainer } from "../../styles/elements"

interface iProps {
    props: {
        img: string,
        title: string,
        price: string
    }
}

export default function Cards({ props }: iProps) {
    return (
        <CardContainer>
            <img src={props.img} alt={'Foto de ' + props.title} />
            <h4>{props.title}</h4>
            <p>R$ {Number(props.price).toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
        </CardContainer>
    )
}