import { FaRegBell } from 'react-icons/fa6';
import { LuAlarmClock, LuInfo } from 'react-icons/lu';
import { PiCross, PiHeart, PiHouse, PiNote, PiSquaresFour } from 'react-icons/pi';
import { create } from 'zustand';

interface IHeader {
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    href: string;
    imagePath?: string;
    bg: string;
}

interface IHeaderState {
    header: IHeader;
    setHeader: (path: string) => void;
}

import baseLogo from '../assets/pages_header.jpg';

const getHeader = (path: string) => {
    const cleanPath = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;

    if (cleanPath.startsWith('/avisos/')) {
        return {
            title: 'Informações e avisos',
            icon: <FaRegBell />,
            iconColor: '#F69F53',
            href: '/avisos',
            bg: '#1A2855',
            imagePath: baseLogo,
        };
    }

    switch (cleanPath) {
        case '/sacramentos':
            return {
                title: 'Sacramentos',
                icon: <PiCross />,
                iconColor: '#F69F53',
                href: '/sacramentos',
                bg: '#1A2855',
                imagePath: baseLogo,
            };
        case '/horarios-de-missas':
            return {
                title: 'Horários de Missas	',
                icon: <LuAlarmClock />,
                iconColor: '#F69F53',
                href: '/horarios-de-missas',
                imagePath: baseLogo,
                bg: '#1A2855',
            };
        case '/portal-da-transparencia':
            return {
                title: 'Portal da transparência',
                icon: <LuInfo />,
                iconColor: '#F69F53',
                href: '/portal-da-transparencia',
                bg: '#1A2855',
            };
        case '/obras-e-reformas':
            return {
                title: 'Obras e reformas',
                icon: <PiNote />,
                iconColor: '#F69F53',
                href: '/obras-e-reformas',
                bg: '#1A2855',
            };
        case '/pastorais-grupos-e-servicos':
            return {
                title: 'Pastorais, grupos e serviços',
                icon: <PiSquaresFour />,
                iconColor: '#F69F53',
                href: '/pastorais-grupos-e-servicos',
                bg: '#1A2855',
                imagePath: baseLogo,
            };
        case '/faca-sua-doacao':
            return {
                title: 'Faça sua doação',
                icon: <PiHeart />,
                iconColor: 'red.700',
                href: '/faca-sua-doacao',
                bg: '#1A2855',
            };
        case '/avisos':
            return {
                title: 'Comunicados e avisos',
                icon: <FaRegBell />,
                iconColor: '#F69F53',
                href: '/avisos',
                bg: '#1A2855',
                imagePath: baseLogo,
            };
        case '/outras-informacoes':
            return {
                title: 'Outras informações',
                icon: <LuInfo />,
                iconColor: '#F69F53',
                href: '/outras-informacoes',
                bg: '#1A2855',
                imagePath: baseLogo,
            };
        case '/cadastro-de-dizimista':
            return {
                title: 'O que é o Dízimo? Cadastre-se como dizimista',
                icon: <PiHeart />,
                iconColor: 'red.700',
                href: '/cadastro-de-dizimista',
                bg: '#1A2855',
            };
        default:
            return {
                title: 'Home',
                icon: <PiHouse />,
                iconColor: '#F69F53',
                href: '/',
                imagePath: baseLogo,
                bg: '#5E92CC',
            };
    }
};

export const headerStore = create<IHeaderState>((set) => ({
    header: getHeader('/'),
    setHeader: (path: string) => set({ header: getHeader(path) }),
}));
