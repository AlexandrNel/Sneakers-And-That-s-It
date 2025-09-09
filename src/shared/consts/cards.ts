export interface Card {
    title: string,
    desc: string,
    imgUrl: string,
}
import Card01 from '../../lib/assets/img/sneakers/01.png'
import Card02 from '../../lib/assets/img/sneakers/02.png'
import Card03 from '../../lib/assets/img/sneakers/03.png'
import Card05 from '../../lib/assets/img/sneakers/05.png'
import Card06 from '../../lib/assets/img/sneakers/06.png'
import Card07 from '../../lib/assets/img/sneakers/07.png'
import Card08 from '../../lib/assets/img/sneakers/08.png'
import Card09 from '../../lib/assets/img/sneakers/09.png'
import Card10 from '../../lib/assets/img/sneakers/10.png'

export const CARDS: Card[] = [
    {
        title: 'The New Balance C-ms574',
        desc: 'Salehe Bembury Shark Skin',
        imgUrl: Card06,
    },
    {
        title: 'Nike Dunk Low SP',
        desc: 'Syracuse (2020/2022)',
        imgUrl: Card07,
    },
    {
        title: 'Converse Chuck 70 High',
        desc: 'Comme des Garcons PLAY Black',
        imgUrl: Card10,
    },
    {
        title: 'adidas Yeezy Foam RNNR',
        desc: 'Stone Sage',
        imgUrl: Card09,
    },
    {
        title: 'Nike Air Max Plus',
        desc: 'Patta FC Barcelona Culers del Món',
        imgUrl: Card01,
    },
    {
        title: 'Jordan 1 Retro High OG SP',
        desc: 'Union LA Bephies Beauty Supply Summer of ‘96',
        imgUrl: Card02,
    },
    {
        title: 'adidas Campus 00s',
        desc: 'Core Black',
        imgUrl: Card03,
    },
    {
        title: 'UGG Classic Ultra Mini Boot',
        desc: 'Chestnut (Women\'s)',
        imgUrl: Card05,
    },
    {
        title: 'Jordan 1 Retro Low Golf',
        desc: 'Travis Scott Neutral Olive',
        imgUrl: Card08,
    }
]
