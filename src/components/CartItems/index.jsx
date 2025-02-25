import { Table } from "../index";
import { useCart } from "../../hooks/cartContext";
import { FormatPrice } from "../../utils/formatPrice";
import { BinButton, ButtonGroup, EmptyCart, ProductImg, TotalPrice } from "./style";
import { Trash } from "@phosphor-icons/react";



export function CartItems() {

    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct} = useCart();
    console.log(cartProducts)
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>item</Table.Th>
                    <Table.Th>Price</Table.Th>
                    <Table.Th>Quantity</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>

            <Table.Body>
                {cartProducts?.length ? (
                        cartProducts.map( product => (
                            <Table.Tr key={product.id}> 
                                <Table.Td>
                                    <ProductImg src={product.url}/>
                                </Table.Td>
                                <Table.Td>
                                    {product.name}
                                </Table.Td>
                                <Table.Td>
                                    {product.currencyValue}
                                </Table.Td>
                                <Table.Td>
                                    <ButtonGroup>
                                        <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    {product.quantity}
                                        <button onClick={() => increaseProduct(product.id)}>+</button>
                                    </ButtonGroup>
                                </Table.Td>
                                <Table.Td>
                                    <TotalPrice>
                                   {FormatPrice(product.quantity * product.price)}
                                   </TotalPrice>
                                   
                                </Table.Td>
                                <Table.Td>
                                    <BinButton>
                                    <Trash  className="trash-icon" onClick={() => deleteProduct(product.id)}/>
                                    </BinButton>
                                </Table.Td>
                            </Table.Tr>
                        ))
                    ) : <EmptyCart>Empty Cart</EmptyCart>}
            </Table.Body>
            
        </Table.Root>
    )
}