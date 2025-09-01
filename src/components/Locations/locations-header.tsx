import type { IMassLocation } from '@/interfaces/IMassLocation';
import { Flex } from '@chakra-ui/react';
import { CardSkeleton } from '../Card/CardSkeleton';
import { MassLocationCard } from '../MassLocations/mass-location-card';

interface LocationsHeaderProps {
    headquarters?: IMassLocation | null;
    isLoading: boolean;
}

export function LocationsHeader({ headquarters, isLoading }: LocationsHeaderProps) {
    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'#1A2855'} py={[8, 8, 16]}>
            {isLoading && <CardSkeleton count={1} />}
            {!isLoading && headquarters && (
                <Flex w="full" maxW={'800px'} px={4}>
                    <MassLocationCard massLocation={headquarters} />
                </Flex>
            )}
        </Flex>
    );
}
