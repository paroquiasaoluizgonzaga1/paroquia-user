import type { INews } from '@/interfaces/INews';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { LuCirclePlus } from 'react-icons/lu';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

interface INewsCardProps {
    news: INews;
}

export function NewsCard({ news }: INewsCardProps) {
    const navigate = useNavigate();

    return (
        <Box w="full">
            <Stack rounded={'2xl'} p={4} bg={'white'} w={'full'} align={'flex-start'} gap={5}>
                <Stack gap={1}>
                    <Text fontWeight={700} fontSize={'lg'} color={'#F69F53'}>
                        {news.title}
                    </Text>
                    <HStack w="full" justify={'flex-start'} fontStyle={'italic'}>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Publicado em
                        </Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            {format(new Date(news.createdAt), 'dd/MM/yyyy')}
                        </Text>
                    </HStack>
                </Stack>
                <Text fontSize={'sm'} color={'gray.700'} lineClamp={3} fontStyle={'italic'}>
                    {news.summary}
                </Text>
                <Button
                    rounded={'full'}
                    fontSize={'sm'}
                    bg={'#0D3D71'}
                    color={'white'}
                    _hover={{ bg: '#1B4D85' }}
                    onClick={() => navigate(`/avisos/${news.id}`)}
                >
                    <LuCirclePlus />
                    ver info completa
                </Button>
            </Stack>
        </Box>
    );
}
