import type { IQuickAccess } from '@/interfaces/IQuickAccess';
import { LuInfo } from 'react-icons/lu';
import { IoMdHeart } from 'react-icons/io';
import { PiCross, PiSquaresFour, PiHandsPrayingFill, PiHeartFill } from 'react-icons/pi';
import { FaBookBible, FaPersonPraying } from 'react-icons/fa6';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { QuickAccessCard } from './quick-access-card';

const quickAccessLinks: IQuickAccess[] = [
    {
        icon: <LuInfo />,
        color: '#F69F53',
        title: 'Portal da Transparência',
        url: '/portal-da-transparencia',
        isExternal: false,
    },
    {
        icon: <PiCross />,
        color: 'blue.800',
        title: 'Sacramentos',
        url: '/sacramentos',
        isExternal: false,
    },
    {
        icon: <PiSquaresFour />,
        color: 'green.700',
        title: 'Pastorais, grupos e serviços',
        url: '/pastorais-grupos-e-servicos',
        isExternal: false,
    },
    {
        icon: <IoMdHeart />,
        color: 'red.700',
        title: 'Doações através do PIX',
        url: '/faca-sua-doacao',
        isExternal: false,
    },
    {
        icon: <FaPersonPraying />,
        color: 'blue.800',
        title: 'Preparação para a confissão',
        url: '/calendario-de-eventos',
        isExternal: true,
    },
    {
        icon: <FaBookBible />,
        color: 'red.800',
        title: 'Liturgia diária',
        url: 'https://liturgia.cancaonova.com/pb/',
        isExternal: true,
    },
    {
        icon: <PiHandsPrayingFill />,
        color: 'blue.500',
        title: 'Como rezar o Santo Terço',
        url: 'https://formacao.cancaonova.com/espiritualidade/oracao/voce-sabe-como-rezar-o-santo-terco/',
        isExternal: true,
    },
    {
        icon: <PiHeartFill />,
        color: 'red.700',
        title: 'Cadastro de dizimista',
        url: '/cadastro-de-dizimista',
        isExternal: false,
    },
];

export function QuickAccessSection() {
    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'gray.300'} py={8}>
            <Heading fontWeight={700} fontSize={'xl'}>
                Links de acesso rápido
            </Heading>
            <Stack w="full" px={4} maxW={'800px'} gap={4}>
                {quickAccessLinks.map((access) => (
                    <QuickAccessCard key={access.title} access={access} />
                ))}
            </Stack>
        </Flex>
    );
}
