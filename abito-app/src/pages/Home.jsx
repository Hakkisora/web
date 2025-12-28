import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constants.js"

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn_icon" src="/image/Vector.svg" alt="Vextor" />
                                <span className="search-btn_text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-box_title">Рекомендации для вас</h2>
                                <div className="content-box_cards">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="content-side">
                                <h3 className="content-side_title">Сервисы и услуги</h3>

                                <div className="content-side_box">
                                    <div className="content-side_list">

                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item--img" src="/image/si1.svg" alt="si1" />
                                            <h5 className="content-side_list-item--title">Доставка</h5>
                                            <p className="content-side_list-item--text">Проверка при получении и возможность
                                                бесплатно вернуть товар
                                            </p>
                                        </div>

                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item--img" src="/image/si2.svg" alt="si2" />
                                            <h5 className="content-side_list-item--title">Автотека</h5>
                                            <p className="content-side_list-item--text">Отчёт с историей авто: пробег, владельцы,
                                                сведения о залоге, ДТП и ремонтах
                                            </p>
                                        </div>

                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item--img" src="/image/si3.svg" alt="si3" />
                                            <h5 className="content-side_list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="content-side_list-item--text">Посуточная аренда квартир и домов: большой
                                                выбор вариантов для поездок по России
                                            </p>
                                        </div>
                                    </div>

                                    <div className="content-side_footer">
                                        <p className="content-side_footer--item">© ООО «Абито», 2011–2021</p>
                                        <a href="#!" className="content-side_footer--item">Полaитика конфиденциальности</a>
                                        <a href="#!" className="content-side_footer--item">Обработка данных</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}