import { type IQuickAccess } from '@/interfaces/IQuickAccess';
import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface IQuickAccessCardProps {
    access: IQuickAccess;
}

export function QuickAccessCard({ access }: IQuickAccessCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (access.isExternal) {
            window.open(access.url, '_blank', 'noopener noreferrer');
        } else {
            navigate(access.url);
        }
    };
    return (
        <Stack
            rounded={'xl'}
            p={4}
            bg={'white'}
            shadow={'sm'}
            w={'full'}
            align={'center'}
            gap={5}
            onClick={handleClick}
            cursor={'pointer'}
        >
            <HStack gap={4}>
                <Icon color={access.color} size={'md'}>
                    {access.icon}
                </Icon>
                <Text fontWeight={700}>{access.title}</Text>
            </HStack>
        </Stack>
    );
}
