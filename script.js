const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-box_cards')

const cardArray = [
    {
        id: 0,
        title: 'Первый товра',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/Card-img.png',
    },
    {
        id: 1,
        title: 'Второй товра',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/Card-img.png',
    },
    {
        id: 2,
        title: 'Третий товра',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/Card-img.png',
    },
    {
        id: 3,
        title: 'Четвертый товра',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/Card-img.png',
    },
    {
        id: 4,
        title: 'Пятый товра',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/Card-img.png',
    },
    {
        id: 5,
        title: 'Шестой товра',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/Card-img.png',
    },
]

const render = (cardMassive) => {
    cardWrapper.innerHTML = ''

    cardMassive.forEach((element, idx) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                <a href="/product.html" class="content-box_cards-item">
                    <div class="content-box_cards-item--img">
                        <img src="${element.img}" alt="${element.title}">
                    </div>
                    <h5 class="content-box_cards-item--title">${element.title}</h5>
                    <strong class="content-box_cards-item--price">${element.price}</strong>
                    <div class="content-box_cards-item--info-box">
                    <span class="content-box_cards-item--info">${element.address}</span>
                    <span class="content-box_cards-item--info">${element.date}</span>
                    </div>
                </a>
            `)
    });
}

cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

const filteredArrat = (array, string) => {
    return array.filter((item) => {
        return item.title.includes(string) || item.price.includes(string)
    })
}

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArrat(cardArray, searchInput.value))
})
