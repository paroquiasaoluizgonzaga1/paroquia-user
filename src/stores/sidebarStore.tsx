import type { IMenu } from '@/interfaces/IMenu';
import { FaRegBell } from 'react-icons/fa6';
import { HiOutlineHome, HiHome } from 'react-icons/hi';
import { LuInfo } from 'react-icons/lu';
import {
    PiChurch,
    PiChurchFill,
    PiCross,
    PiCrossFill,
    PiHeart,
    PiHeartFill,
    PiSquaresFour,
    PiSquaresFourFill,
} from 'react-icons/pi';
import { create } from 'zustand';

interface ISidebarState {
    isOpen: boolean;
    toggle: () => void;
    menu: IMenu[];
}

const menuItems: IMenu[] = [
    {
        title: 'Página inicial',
        href: '/',
        icon: <HiOutlineHome />,
        iconActive: <HiHome />,
    },
    {
        title: 'Horários de Missas',
        href: '/horarios-de-missas',
        icon: <PiChurch />,
        iconActive: <PiChurchFill />,
    },
    {
        title: 'Portal da transparência',
        href: '/portal-da-transparencia',
        icon: <LuInfo />,
        iconActive: <LuInfo />,
    },
    {
        title: 'Doações através do PIX',
        href: '/faca-sua-doacao',
        icon: <PiHeart />,
        iconActive: <PiHeartFill />,
    },
    {
        title: 'Comunicados e avisos',
        href: '/avisos',
        icon: <FaRegBell />,
        iconActive: <FaRegBell />,
    },
    {
        title: 'Sacramentos',
        href: '/sacramentos',
        icon: <PiCross />,
        iconActive: <PiCrossFill />,
    },
    {
        title: 'Pastorais, grupos e serviços',
        href: '/pastorais-grupos-e-servicos',
        icon: <PiSquaresFour />,
        iconActive: <PiSquaresFourFill />,
    },
    {
        title: 'Outras informações',
        href: '/outras-informacoes',
        icon: <LuInfo />,
        iconActive: <LuInfo />,
    },
    {
        title: 'Cadastro de dizimista',
        href: '/cadastro-de-dizimista',
        icon: <PiHeart />,
        iconActive: <PiHeartFill />,
    },
];

export const sidebarStore = create<ISidebarState>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    menu: menuItems,
}));
