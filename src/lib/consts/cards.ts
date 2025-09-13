export interface ICard {
    title: string,
    desc: string,
    imgUrl: string,
    additional?: {
        desc: string,
        price: number,
        currency: string,
        date: string,
        parameter: string
    }
}
import Card01 from '$lib/assets/img/sneakers/01.png'
import Card02 from '$lib/assets/img/sneakers/02.png'
import Card03 from '$lib/assets/img/sneakers/03.png'
import Card05 from '$lib/assets/img/sneakers/05.png'
import Card06 from '$lib/assets/img/sneakers/06.png'
import Card07 from '$lib/assets/img/sneakers/07.png'
import Card08 from '$lib/assets/img/sneakers/08.png'
import Card09 from '$lib/assets/img/sneakers/09.png'
import Card10 from '$lib/assets/img/sneakers/10.png'

export const CARDS: ICard[] = [
    {
        title: 'The New Balance C-ms574',
        desc: 'Salehe Bembury Shark Skin',
        imgUrl: Card06,
        additional: {
            desc: "Компания New Balance изначально занималась производством стель и ортопедической обуви в начале \n 20-го века в Бостоне, США. Сегодня, New Balance — это мировой бренд, производящий спортивную одежду и обувь для активного отдыха и спорта. Кроссовки New Balance отличаются удобством, стабильностью, качеством и современным дизайном. \n Благодаря технологиям, таким как Encap и Abzorb, обувь этого бренда обеспечивает оптимальную амортизацию и поддержку стопы, делая её популярной среди спортсменов и любителей активного образа жизни. Кроме этого, New Balance заботится о внешнем виде своей продукции, предлагая разнообразие моделей и цветовых решений, от классических до ярких и стильных. \n Кроссовки New Balance предназначены для различных видов деятельности: бега, ходьбы, тренировок в зале и повседневной носки. Они сочетают в себе комфорт и функциональность, а также удовлетворяют потребности как профессиональных спортсменов, так и любителей спорта. Благодаря широкому ассортименту, каждый может выбрать подходящую для себя модель.",
            price: 250,
            currency: "€",
            date: "02/12/2023",
            parameter: "Замша 100%, резина"
        }
    },
    {
        title: 'Nike Dunk Low SP',
        desc: 'Syracuse (2020/2022)',
        imgUrl: Card07,
        additional: {
            desc: "Nike Dunk Low SP Syracuse — культовая модель, вдохновленная баскетбольной командой Syracuse University. Кроссовки выполнены из высококачественной кожи, сочетают белый и оранжевый цвета, что делает их яркими и узнаваемыми. Отличаются удобной посадкой и прочной подошвой, идеально подходят для повседневной носки и коллекционеров.",
            price: 180,
            currency: "€",
            date: "15/03/2022",
            parameter: "Кожа, резина"
        }
    },
    {
        title: 'Converse Chuck 70 High',
        desc: 'Comme des Garcons PLAY Black',
        imgUrl: Card10,
        additional: {
            desc: "Converse Chuck 70 High Comme des Garcons PLAY Black — результат сотрудничества Converse и японского бренда Comme des Garçons. Классические высокие кеды украшены узнаваемым логотипом в виде сердца. Верх из прочного текстиля, усиленная подошва и винтажный стиль делают модель популярной среди поклонников уличной моды.",
            price: 160,
            currency: "€",
            date: "10/09/2021",
            parameter: "Текстиль, резина"
        }
    },
    {
        title: 'adidas Yeezy Foam RNNR',
        desc: 'Stone Sage',
        imgUrl: Card09,
        additional: {
            desc: "adidas Yeezy Foam RNNR Stone Sage — инновационные кроссовки, созданные совместно с Канье Уэстом. Модель выполнена из легкого и экологичного материала EVA, отличается необычным дизайном и комфортом. Подходит для летнего сезона и активного отдыха.",
            price: 120,
            currency: "€",
            date: "22/04/2022",
            parameter: "EVA, пена"
        }
    },
    {
        title: 'Nike Air Max Plus',
        desc: 'Patta FC Barcelona Culers del Món',
        imgUrl: Card01,
        additional: {
            desc: "Nike Air Max Plus Patta FC Barcelona Culers del Món — лимитированная версия культовых кроссовок Air Max Plus, созданная в сотрудничестве с Patta и футбольным клубом Барселона. Модель отличается уникальным дизайном, амортизацией Air и высокой износостойкостью.",
            price: 210,
            currency: "€",
            date: "05/11/2023",
            parameter: "Текстиль, синтетика, резина"
        }
    },
    {
        title: 'Jordan 1 Retro High OG SP',
        desc: 'Union LA Bephies Beauty Supply Summer of ‘96',
        imgUrl: Card02,
        additional: {
            desc: "Jordan 1 Retro High OG SP Union LA Bephies Beauty Supply Summer of ‘96 — эксклюзивная модель, созданная в коллаборации с Union LA и Bephies Beauty Supply. Кроссовки выполнены из премиальных материалов, сочетают ретро-эстетику и современные технологии.",
            price: 320,
            currency: "€",
            date: "18/08/2022",
            parameter: "Кожа, текстиль, резина"
        }
    },
    {
        title: 'adidas Campus 00s',
        desc: 'Core Black',
        imgUrl: Card03,
        additional: {
            desc: "adidas Campus 00s Core Black — переосмысленная классика, вдохновленная стилем 2000-х. Верх из замши, массивная подошва и минималистичный дизайн делают модель универсальной для любого гардероба.",
            price: 110,
            currency: "€",
            date: "12/06/2023",
            parameter: "Замша, резина"
        }
    },
    {
        title: 'UGG Classic Ultra Mini Boot',
        desc: 'Chestnut (Women\'s)',
        imgUrl: Card05,
        additional: {
            desc: "UGG Classic Ultra Mini Boot Chestnut — женские ботинки из натуральной овчины и замши. Модель отличается низким силуэтом, мягкостью и теплом, идеально подходит для холодного времени года.",
            price: 140,
            currency: "€",
            date: "01/10/2022",
            parameter: "Овчина, замша, резина"
        }
    },
    {
        title: 'Jordan 1 Retro Low Golf',
        desc: 'Travis Scott Neutral Olive',
        imgUrl: Card08,
        additional: {
            desc: "Jordan 1 Retro Low Golf Travis Scott Neutral Olive — лимитированная версия для гольфа, созданная в сотрудничестве с Трэвисом Скоттом. Кроссовки выполнены из премиальных материалов, имеют уникальные детали и комфортную посадку.",
            price: 350,
            currency: "€",
            date: "13/05/2023",
            parameter: "Кожа, замша, резина"
        }
    }
]
