import { api } from '@/services/api';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toaster } from '@/components/ui/toaster';
import { CardSkeleton } from '@/components/Card/CardSkeleton';
import { EmptyList } from '@/components/EmptyList';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate, useParams } from 'react-router-dom';
import type { INews } from '@/interfaces/INews';
import { NewsByIdCard } from '@/components/News/news-by-id-card';

export function NewsById() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [news, setNews] = useState<INews | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get<INews>(`news/${id}`)
            .then((response) => {
                setNews(response.data);
            })
            .catch(() => {
                toaster.error({ title: 'Erro ao buscar comunicado ou aviso' });
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

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
            {isLoading && <CardSkeleton count={1} />}
            {!isLoading && news && (
                <Stack w="full" gap={8}>
                    <NewsByIdCard news={news} />
                </Stack>
            )}
            {!isLoading && !news && <EmptyList />}
            <Button
                mt={4}
                rounded={'full'}
                fontSize={'sm'}
                bg={'#0D3D71'}
                _hover={{ bg: '#1B4D85' }}
                color={'white'}
                w="fit-content"
                fontWeight={700}
                onClick={() => navigate('/avisos')}
            >
                <LuCircleArrowLeft />
                Voltar para os avisos
            </Button>
        </Flex>
    );
}
