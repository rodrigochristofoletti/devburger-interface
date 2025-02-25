import PropTypes from "prop-types"
import { CartImage, Container } from "./style"
import { CartButton } from "../CartButton"
import { useCart } from "../../hooks/cartContext"

export function CardProduct ({ product }) {

    const { putProductInCart } = useCart();

    return (
<Container>
    <CartImage src={product.url} alt={product.name} />
    <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
    </div>
    <CartButton onClick={ () => putProductInCart(product)}></CartButton>
</Container>
    )
}
Container
CardProduct.propTypes = {
    product: PropTypes.object,
}