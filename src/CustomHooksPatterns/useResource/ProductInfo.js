import {useResource} from './useResource'

export const ProductInfo = ({productId}) => {
    const product = useResource(`/products/${productId}`)

    const {name, price, description, rating} = product || {};

    return (
        <>
            <h3>{name}</h3>
            <p>price: ${price}</p>
            <p>description: </p>
            <p>{description}</p>
            <p>rating: {rating}</p>
        </>
    )
}