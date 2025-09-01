import type { IOtherSchedule } from '@/interfaces/IOtherSchedule';
import { api } from '@/services/api';
import { Button, Flex, For, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toaster } from '../ui/toaster';
import { CardSkeleton } from '../Card/CardSkeleton';
import { OtherScheduleCard } from './other-schedule-card';
import { EmptyList } from '../EmptyList';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

interface OtherSchedulesSectionProps {
    type: number;
}

export function OtherSchedulesSection({ type }: OtherSchedulesSectionProps) {
    const navigate = useNavigate();

    const [otherSchedules, setOtherSchedules] = useState<IOtherSchedule[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get<IOtherSchedule[]>('other-schedules', {
            params: {
                type,
            },
        })
            .then((response) => {
                setOtherSchedules(response.data);
            })
            .catch(() => {
                toaster.error({ title: 'Erro ao buscar programações' });
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [type]);

    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'#1A2855'} py={8} minH={'70vh'}>
            {isLoading && <CardSkeleton count={5} />}
            {!isLoading && otherSchedules && otherSchedules.length > 0 && (
                <Stack w="full" px={4} maxW={'800px'} gap={8}>
                    <For each={otherSchedules}>
                        {(schedule) => <OtherScheduleCard key={schedule.id} schedule={schedule} />}
                    </For>
                </Stack>
            )}
            {!isLoading && otherSchedules && otherSchedules.length === 0 && <EmptyList />}
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
