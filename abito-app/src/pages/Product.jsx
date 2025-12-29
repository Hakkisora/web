import { useParams } from "react-router-dom"
import { ContentSide } from "../components/ContentSide/ContentSide"
import { sideArray } from "../constants"
import { useOutletContext } from "react-router-dom"

export const Product = () => {

    const { products } = useOutletContext()
    const { id } = useParams();
    const findeProduct = products.find(item => item.id === +id);

    return (
        <section className="content">
            <div className="container">

                {findeProduct ?
                    <div className="content-box">
                        <div className="content-product">
                            <div className="content-product_info">
                                <h2 className="content-product_title">{findeProduct.title}</h2>
                                <img src={findeProduct.img} alt="good" className="content-product_img" />

                                <p className="content-product_text">
                                    {findeProduct.discription}
                                </p>
                            </div>
                            <div className="content-product_operatioin">
                                <h2 className="content-product_price">{findeProduct.price}</h2>

                                <button className="btn btn-primary btn-large">Показать телефон</button>
                            </div>
                        </div>

                        <div className="content-side">
                            <h3 className="content-side_title">Сервисы и услуги</h3>

                            <div className="content-side_box">
                                <div className="content-side_list">

                                    {
                                        sideArray.map(item => (
                                            <ContentSide
                                                key={item.id}
                                                title={item.title}
                                                text={item.text}
                                                img={item.img}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="content-side_footer">
                                    <p className="content-side_footer--item">© ООО «Абито», 2011–2021</p>
                                    <a href="#!" className="content-side_footer--item">Полaитика конфиденциальности</a>
                                    <a href="#!" className="content-side_footer--item">Обработка данных</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <h2>Нихера не найдено</h2>
                }

            </div>
        </section>
    )
}