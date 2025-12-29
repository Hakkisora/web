import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useState } from "react"
import { cardArray } from "../constants"
import { useEffect } from "react"


export const Layout = () => {

    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const filteredArray = () => {
        setProducts(cardArray.filter((item) => {
            return item.title.includes(searchText) || item.price.includes(searchText)
        }))
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={filteredArray}>
                                <img className="search-btn_icon" src="/image/Vector.svg" alt="Vextor" />
                                <span className="search-btn_text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{ products: products }} />
            </main>
        </>
    )
}