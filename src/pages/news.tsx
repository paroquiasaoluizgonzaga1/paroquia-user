import { CardSkeleton } from '@/components/Card/CardSkeleton';
import { NewsCard } from '@/components/News/news-card';
import { EmptyList } from '@/components/EmptyList';
import { toaster } from '@/components/ui/toaster';
import type { INews } from '@/interfaces/INews';
import { api } from '@/services/api';
import { Button, Flex, For, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@/components/Pagination';

interface IFilter {
    pageIndex: number;
    pageSize: number;
}

export function News() {
    const navigate = useNavigate();

    const [news, setNews] = useState<INews[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [filter, setFilter] = useState<IFilter>({
        pageIndex: 0,
        pageSize: 10,
    });

    const setPageIndex = (pageIndex: number) => {
        setFilter({ ...filter, pageIndex });
    };
    const setPageSize = (pageSize: number) => {
        setFilter({ ...filter, pageSize });
    };

    const fetchNews = () => {
        setIsLoading(true);

        api.get<INews[]>('news', {
            params: {
                pageIndex: filter.pageIndex,
                pageSize: filter.pageSize,
            },
        })
            .then((response) => {
                setNews(response.data);
            })
            .catch(() => {
                toaster.error({ title: 'Erro ao buscar comunicados e avisos' });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchNews();
    }, [filter]);

    return (
        <Flex bg={'#1A2855'} justify={'center'} align={'center'} w="full">
            <Flex flexDir={'column'} gap={8} py={8} px={4} maxW={'800px'} justify={'center'} align={'center'}>
                <Stack w="full" gap={8}>
                    {isLoading && <CardSkeleton count={5} />}
                    {!isLoading && news && news.length > 0 && (
                        <For each={news}>{(news) => <NewsCard key={news.id} news={news} />}</For>
                    )}
                    {!isLoading && news && news.length === 0 && <EmptyList />}
                </Stack>
                <Pagination
                    pageIndex={filter.pageIndex}
                    pageSize={filter.pageSize}
                    setPageIndex={setPageIndex}
                    setPageSize={setPageSize}
                />
                <Button
                    rounded={'full'}
                    fontSize={'sm'}
                    bg={'#0D3D71'}
                    _hover={{ bg: '#1B4D85' }}
                    color={'white'}
                    w="fit-content"
                    fontWeight={700}
                    onClick={() => navigate('/')}
                >
                    <LuCircleArrowLeft />
                    Voltar à página inicial
                </Button>
            </Flex>
        </Flex>
    );
}
