import "./Card.css"

export const Card = ({ title, price, address, date, img }) => {
    return (
        <a href="/product.html" className="card">
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

        </a>
    )
}