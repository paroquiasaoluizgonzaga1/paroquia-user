import type { IMassLocation } from '@/interfaces/IMassLocation';
import { Box, Stack, Text, HStack, Icon, Badge } from '@chakra-ui/react';
import { PiChurch, PiMapPin } from 'react-icons/pi';
import { LuClock } from 'react-icons/lu';

interface IMassLocationCardProps {
    massLocation: IMassLocation;
}

export function MassLocationCard({ massLocation }: IMassLocationCardProps) {
    const handleOpenAddress = () => {
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${massLocation.latitude},${massLocation.longitude}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <Box w="full">
            <Stack rounded={'2xl'} p={6} bg={'white'} w={'full'} align={'flex-start'} gap={4} shadow={'md'}>
                <HStack w="full" justify={'space-between'} align={'flex-start'}>
                    <HStack gap={3}>
                        <Icon size="lg" color={'#F69F53'}>
                            <PiChurch />
                        </Icon>
                        <Stack gap={1}>
                            <Text fontWeight={700} fontSize={'lg'} color={'#0D3D71'}>
                                {massLocation.name}
                            </Text>
                        </Stack>
                    </HStack>
                </HStack>

                <HStack gap={2} color={'gray.600'}>
                    <Icon size="sm">
                        <PiMapPin />
                    </Icon>
                    <Text fontSize={'sm'} onClick={handleOpenAddress} cursor={'pointer'}>
                        {massLocation.address}
                    </Text>
                </HStack>

                {massLocation.schedules && massLocation.schedules.length > 0 && (
                    <Stack gap={3} w="full">
                        <HStack gap={2} color={'gray.600'}>
                            <Icon size="sm">
                                <LuClock />
                            </Icon>
                            <Text fontSize={'sm'} fontWeight={600}>
                                Horários de Missa:
                            </Text>
                        </HStack>

                        <Stack gap={2} pl={6}>
                            {massLocation.schedules.map((schedule, index) => (
                                <Box key={index}>
                                    <Text fontSize={'sm'} fontWeight={600} color={'#F69F53'} mb={1}>
                                        {schedule.day}
                                    </Text>
                                    <HStack gap={2} flexWrap={'wrap'}>
                                        {schedule.times.map((time, timeIndex) => (
                                            <Badge
                                                key={timeIndex}
                                                colorScheme="orange"
                                                variant="outline"
                                                fontSize={'xs'}
                                                px={2}
                                                py={1}
                                            >
                                                {time.slice(0, 5)}
                                            </Badge>
                                        ))}
                                    </HStack>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Box>
    );
}
