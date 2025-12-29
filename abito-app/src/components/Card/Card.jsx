
import { Link } from "react-router-dom"
import "./Card.css"

export const Card = ({ id, title, price, address, date, img }) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <div className="card--img">
                <img src={img} alt="card-img" />

            </div>

            <h5 className="card--title">
                {title}
            </h5>

            <strong className="card--price">
                {price}
            </strong>

            <div className="card--info-box">

                <span className="card--info">
                    {address}
                </span>
                <span className="card--info">
                    {date}
                </span>

            </div>

        </Link>
    )
}
