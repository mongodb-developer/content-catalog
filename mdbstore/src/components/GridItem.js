import { Fragment } from "react";

export default function GridItem(props) {

  const { image_url, name, category, price, price_special } = props;

  const formatPrice = price => {
    let cents = parseInt((price * 100)).toString();
    return `${cents.substring(0, cents.length - 2)}.${cents.substring(cents.length - 2)}$`;
  }
  
  return (
    <div className="card">
      <img src={image_url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {price_special && 
          <Fragment>
            <p className="card-text strikethrough">{formatPrice(price)}</p>
            <p className="card-text">Now: {formatPrice(price_special)}</p>
          </Fragment>
        }
        {!price_special &&
          <p className="card-text">{formatPrice(price)}</p>
        }
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{category}</li>
      </ul>
    </div>
  )
}