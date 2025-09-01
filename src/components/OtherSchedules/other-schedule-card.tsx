import type { IOtherSchedule } from '@/interfaces/IOtherSchedule';
import { Box, Separator, Stack, Text } from '@chakra-ui/react';
import { Prose } from '@/components/ui/prose';

interface IOtherScheduleCardProps {
    schedule: IOtherSchedule;
}

export function OtherScheduleCard({ schedule }: IOtherScheduleCardProps) {
    return (
        <Stack rounded={'xl'} p={4} bg={'white'} shadow={'sm'} w={'full'} align={'center'} gap={5}>
            <Text fontWeight={700} fontSize={'2xl'} color={'#F69F53'}>
                {schedule.title}
            </Text>
            <Separator w="full" />
            <Box w="full">
                <Prose maxW={'800px'} dangerouslySetInnerHTML={{ __html: schedule.content }} />
            </Box>
        </Stack>
    );
}
