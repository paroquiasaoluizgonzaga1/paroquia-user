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
        <Flex
            flexDir={'column'}
            justify={'center'}
            align={'center'}
            gap={8}
            bg={'#1A2855'}
            py={8}
            px={4}
            maxW={'800px'}
        >
            {isLoading && <CardSkeleton count={5} />}
            {!isLoading && news && news.length > 0 && (
                <Stack w="full" gap={8}>
                    <For each={news}>{(news) => <NewsCard key={news.id} news={news} />}</For>
                </Stack>
            )}
            {!isLoading && news && news.length === 0 && <EmptyList />}
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
    );
}
