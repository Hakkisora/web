import "./ContentSide.css"

export const ContentSide = ({ title, text, img }) => {
    return (
        <div className="item">
            <img className="item--img" src={img} alt="si" />
            <h5 className="item--title">{title}</h5>
            <p className="item--text">
                {text}
            </p>
        </div>
    )
}