import { SHeader, SMain } from "../../styles/elements"
import { useState } from "react"
import produtos from "../../services/products"
import Cards from "../../components/cards"


export default function Home() {
    const [vitrine, setVitrine] = useState(produtos)

    function setDisplay(param: string) {
        if (param.length > 0) {
            const filtrado = produtos.filter((produto) => produto.title.toLowerCase().includes(param.toLowerCase()))
            setVitrine(filtrado)
        } else {
            setVitrine(produtos)
        }
    }

    return (
        <>
            <SHeader>
                <h1>TechShop</h1>
                <input type='text' placeholder='Digite aqui sua busca!' onChange={(event) => { console.log('digitou'); setDisplay(event.target.value) }} />
            </SHeader>
            <SMain>
                {vitrine.length > 0 ? vitrine.map((produto) => <Cards key={produto.title} props={produto} />) : <h3>Nenhum produto encontrado!</h3>}
            </SMain>
        </>
    )
}