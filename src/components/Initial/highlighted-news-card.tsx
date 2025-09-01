import { Box, Stack, Text, Button, HStack, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import type { INews } from '../../interfaces/INews';
import { PiNewspaper } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export function HighlightedNewsCard() {
    const [highlightedNews, setHighlightedNews] = useState<INews | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHighlightedNews = async () => {
            try {
                setError(null);

                const response = await api.get<INews>('/news/highlighted');
                setHighlightedNews(response.data);
            } catch {
                setError('Não foi possível carregar a notícia destacada');
            }
        };

        fetchHighlightedNews();
    }, []);

    const handleViewNews = () => {
        if (highlightedNews) {
            navigate(`/avisos/${highlightedNews.id}`);
        }
    };

    if (error || !highlightedNews) {
        return null;
    }

    return (
        <Box w="full">
            <Stack
                rounded={'2xl'}
                p={6}
                bg={'white'}
                w={'full'}
                align={'flex-start'}
                gap={4}
                shadow={'lg'}
                border={'2px solid'}
                borderColor={'orange.200'}
                _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'xl',
                    borderColor: '#F69F53',
                }}
                transition={'all 0.3s ease'}
                cursor={'pointer'}
                onClick={handleViewNews}
            >
                <HStack gap={3} w="full">
                    <Icon size="lg" color={'#F69F53'}>
                        <PiNewspaper />
                    </Icon>
                    <Stack gap={1} textAlign={'left'}>
                        <Text fontWeight={700} fontSize={'lg'} color={'#F69F53'}>
                            DESTAQUE
                        </Text>
                        <Text fontSize={'sm'} color={'gray.600'}>
                            Aviso em Destaque
                        </Text>
                    </Stack>
                </HStack>
                <Stack gap={2}>
                    <Text fontSize={'xl'} fontWeight={700} color={'brand.700'} lineHeight={'1.3'}>
                        {highlightedNews.title}
                    </Text>

                    {highlightedNews.summary && (
                        <Text fontSize={'sm'} color={'gray.600'} lineHeight={'1.5'}>
                            {highlightedNews.summary}
                        </Text>
                    )}

                    <Text fontSize={'xs'} color={'gray.500'}>
                        {new Date(highlightedNews.createdAt).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        })}
                    </Text>
                </Stack>

                <Button
                    colorPalette={'blue'}
                    size="sm"
                    w="full"
                    variant="outline"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleViewNews();
                    }}
                >
                    Ler aviso completo
                </Button>
            </Stack>
        </Box>
    );
}
