export const ProductInfo = ({product}) => {
    const {name, price, description, rating} = product || {};

    return product ? (
        <>
            <h3>{name}</h3>
            <p>price: ${price}</p>
            <p>description: </p>
            <p>{description}</p>
            <p>rating: {rating}</p>
        </>
    ) : <p>Loading</p>
}