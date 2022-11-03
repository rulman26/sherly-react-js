import { useState } from "react"

const Item = ({product}) => {
    return (
        <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.img} className="card-img-top" />
                <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <h6 className="card-title text-danger">S/ {product.price.toFixed(2)}</h6>
                    <p className="card_p__text">{product.description}</p>
                    <button className="btn btn-outline-dark">Ver Detalle</button>
                </div>
            </div>
        </div>
    )
}


export default Item