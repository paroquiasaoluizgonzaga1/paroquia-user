import type { INews } from '@/interfaces/INews';
import { api } from '@/services/api';
import { Button, Flex, For, Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import { FaRegBell } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { toaster } from '@/components/ui/toaster';
import { EmptyList } from '@/components/EmptyList';
import { CardSkeleton } from '@/components/Card/CardSkeleton';
import { NewsCard } from './news-card';
import { LuCirclePlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

export function NewsSection() {
    const navigate = useNavigate();

    const [news, setNews] = useState<INews[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get<INews[]>('news', {
            params: {
                pageIndex: 0,
                pageSize: 3,
            },
        })
            .then((response) => {
                setNews(response.data);
            })
            .catch(() => {
                toaster.error({ title: 'Erro ao carregar informações e avisos' });
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'#1A2855'} py={8}>
            <HStack gap={3}>
                <Icon color={'#F69F53'} size={'lg'}>
                    <FaRegBell />
                </Icon>
                <Heading fontWeight={700} fontSize={'xl'} color={'white'}>
                    Informações e avisos
                </Heading>
            </HStack>
            {isLoading && <CardSkeleton count={3} />}
            {!isLoading && news && news.length > 0 && (
                <Stack w="full" px={4} maxW={'800px'} gap={5} align={'center'}>
                    <For each={news}>{(news) => <NewsCard key={news.id} news={news} />}</For>
                    <Button
                        mt={4}
                        rounded={'full'}
                        fontSize={'sm'}
                        bg={'white'}
                        color={'#0D3D71'}
                        w="fit-content"
                        fontWeight={700}
                        onClick={() => navigate('/avisos')}
                    >
                        <LuCirclePlus />
                        ver todos os avisos
                    </Button>
                </Stack>
            )}
            {!isLoading && news && news.length === 0 && <EmptyList />}
        </Flex>
    );
}
