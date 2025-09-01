import type { IMassLocation } from '@/interfaces/IMassLocation';
import { Stack, Heading, Flex, Button, HStack, Icon } from '@chakra-ui/react';
import { CardSkeleton } from '../Card/CardSkeleton';
import { MassLocationCard } from '../MassLocations/mass-location-card';
import { EmptyList } from '../EmptyList';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { PiChurch } from 'react-icons/pi';

interface LocationsSectionProps {
    locations: IMassLocation[];
    isLoading: boolean;
}

export function LocationsSection({ locations, isLoading }: LocationsSectionProps) {
    const navigate = useNavigate();

    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'gray.300'} py={8}>
            <HStack>
                <Icon size="xl" color={'blue.800'}>
                    <PiChurch />
                </Icon>
                <Heading fontWeight={700} fontSize={'2xl'}>
                    Capelas
                </Heading>
            </HStack>
            {isLoading && <CardSkeleton count={5} />}
            {!isLoading && locations && locations.length > 0 && (
                <Stack w="full" px={4} maxW={'800px'} gap={8}>
                    {locations.map((location) => (
                        <MassLocationCard key={location.id} massLocation={location} />
                    ))}
                </Stack>
            )}
            {!isLoading && locations && locations.length === 0 && <EmptyList />}
            <Button
                mt={4}
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
