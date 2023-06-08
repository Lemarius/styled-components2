import { v4 } from "uuid";

export const CARDS = [
    {
        id: v4(),
        src: '/public/images/icon-facebook.svg',
        alt: 'Facebook',
        user: '@nathanf',
        followers: '1.987',
        text: 'FOLLOWERS',
        svg: '/public/images/icon-up.svg',
        number: '12',
        color: '#178FF5',
        colorSymbol: '#1EB589'
    },
    {
        id: v4(),
        src: '/public/images/icon-twitter.svg',
        alt: 'Twitter',
        user: '@nathanf',
        followers: '1.044',
        text: 'FOLLOWERS',
        svg: '/public/images/icon-up.svg',
        number: '99',
        color: '#1DA1F2',
        colorSymbol: '#1EB589'
    },
    {
        id: v4(),
        src: '/public/images/icon-instagram.svg',
        alt: 'Instagram',
        user: '@realnathanf',
        followers: '11k',
        text: 'FOLLOWERS',
        svg: '/public/images/icon-up.svg',
        number: '1099',
        color: 'orange',
        colorSymbol: '#1EB589'
    },
    {
        id: v4(),
        src: '/public/images/icon-youtube.svg',
        alt: 'Youtube',
        user: 'Nathan F.',
        followers: '8239',
        text: 'SUBSCRIBERS',
        svg: '/public/images/icon-down.svg',
        number: '144',
        color: 'red',
        colorSymbol: '#DC414C'
    }
    
]