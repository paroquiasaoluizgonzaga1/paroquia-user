import type { INews } from '@/interfaces/INews';
import { Box, HStack, Separator, Stack, Text } from '@chakra-ui/react';
import { Prose } from '@/components/ui/prose';
import { format } from 'date-fns';
import { NewsImagesSlide } from './slides/news-images-slide';

interface INewsByIdCardProps {
    news: INews;
}

export function NewsByIdCard({ news }: INewsByIdCardProps) {
    return (
        <Stack rounded={'xl'} p={4} bg={'white'} shadow={'sm'} w={'full'} align={'center'} gap={5}>
            <Stack gap={1}>
                <Text fontWeight={700} fontSize={'2xl'} color={'#F69F53'}>
                    {news.title}
                </Text>
                <HStack w="full" justify={'flex-end'} fontStyle={'italic'}>
                    <Text fontSize={'sm'} color={'gray.500'}>
                        Publicado em
                    </Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                        {format(new Date(news.createdAt), 'dd/MM/yyyy')}
                    </Text>
                </HStack>
            </Stack>
            <Separator w="full" />
            <Box w="full">
                <Prose maxW={'800px'} dangerouslySetInnerHTML={{ __html: news.content }} />
            </Box>
            <NewsImagesSlide images={news.files.map((file) => file.url)} />
        </Stack>
    );
}
