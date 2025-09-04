import type { IMassLocation } from '@/interfaces/IMassLocation';
import { api } from '@/services/api';
import { Flex, HStack, Icon, Heading, Button, Text, Image, useBreakpointValue, Stack, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { LuAlarmClock } from 'react-icons/lu';
import { CardSkeleton } from '../Card/CardSkeleton';
import { MassLocationCard } from '../MassLocations/mass-location-card';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../Header/Menu';
import { LiveStreamCard } from './live-stream-card';
import { HighlightedNewsCard } from './highlighted-news-card';

import headerImage from '../../assets/paroquia_header.jpg';
import headerImageMobile from '../../assets/paroquia_header_mobile.jpg';

export function InitialSection() {
    const navigate = useNavigate();

    const [headquarters, setHeadquarters] = useState<IMassLocation | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isMobile = useBreakpointValue({
        base: true,
        md: false,
    });

    useEffect(() => {
        const fetchHeadquarters = () => {
            api.get<IMassLocation>('mass-locations/headquarters')
                .then((response) => {
                    setHeadquarters(response.data);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        fetchHeadquarters();
    }, []);

    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'#1A2855'} pb={8}>
            <Flex maxW={'1000px'} pos={'relative'}>
                <Image
                    src={isMobile ? headerImageMobile : headerImage}
                    alt="Paróquia São Luiz Gonzaga"
                    maxH={'350px'}
                />
                <Box pos={'absolute'} top={4} right={[4, 6, 8, 12]}>
                    <Menu />
                </Box>
            </Flex>
            <Stack color={'white'} px={4} textAlign={'center'} gap={8}>
                <LiveStreamCard />
                <Heading as={'h2'} color={'#F69F53'} fontSize={'lg'}>
                    Rua Liberato Salzano Vieira da Cunha, 805 - São Luiz, Sapiranga - RS
                </Heading>
                <HighlightedNewsCard />
            </Stack>
            <HStack>
                <Icon color={'white'} size={'lg'}>
                    <LuAlarmClock />
                </Icon>
                <Heading fontWeight={700} fontSize={'xl'} color={'white'}>
                    Horários de Missas
                </Heading>
            </HStack>
            <Flex w="full" maxW={'800px'} px={4}>
                {isLoading && <CardSkeleton count={1} />}
                {!isLoading && headquarters && <MassLocationCard massLocation={headquarters} />}
            </Flex>
            <Button
                rounded={'full'}
                bg={'#0D3D71'}
                color={'white'}
                _hover={{ bg: '#1B4D85' }}
                shadow={'md'}
                onClick={() => navigate('/horarios-de-missas')}
            >
                <LuAlarmClock />
                <Text fontWeight={'bold'}>Ver horários das capelas</Text>
            </Button>
        </Flex>
    );
}
