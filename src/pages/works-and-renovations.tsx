import type { IOtherSchedule } from '@/interfaces/IOtherSchedule';
import { api } from '@/services/api';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toaster } from '@/components/ui/toaster';
import { CardSkeleton } from '@/components/Card/CardSkeleton';
import { OtherScheduleCard } from '@/components/OtherSchedules/other-schedule-card';
import { EmptyList } from '@/components/EmptyList';
import { LuCircleArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { OtherScheduleTypes } from '@/constants/OtherScheduleTypes';

export function WorksAndRenovations() {
    const navigate = useNavigate();

    const [worksAndRenovations, setWorksAndRenovations] = useState<IOtherSchedule | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get<IOtherSchedule>('other-schedules/first-by-type', {
            params: { type: OtherScheduleTypes.WorksAndRenovations },
        })
            .then((response) => {
                setWorksAndRenovations(response.data);
            })
            .catch(() => {
                toaster.error({ title: 'Erro ao buscar obras e reformas' });
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'#1A2855'} pb={8}>
            {isLoading && <CardSkeleton count={5} />}
            {!isLoading && worksAndRenovations && (
                <Stack w="full" px={4} maxW={'800px'} gap={8}>
                    <OtherScheduleCard schedule={worksAndRenovations} />
                </Stack>
            )}
            {!isLoading && !worksAndRenovations && <EmptyList />}
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
