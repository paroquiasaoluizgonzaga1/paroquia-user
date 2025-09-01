import { Box, Stack, Text, Icon, HStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { PiYoutubeLogo } from 'react-icons/pi';
import { useState, useEffect } from 'react';

// Animação de pulso para o ícone
const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export function LiveStreamCard() {
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            const isWednesday = now.getDay() === 3;
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const isLiveTime = (currentMinute >= 45 && currentHour == 18) || currentHour == 19;

            setIsLive(isWednesday && isLiveTime);
        }, 60000);

        const now = new Date();
        const isWednesday = now.getDay() === 3;
        const currentHour = now.getHours();
        const isLiveTime = currentHour >= 19 && currentHour < 20;

        setIsLive(isWednesday && isLiveTime);

        return () => clearInterval(interval);
    }, []);

    if (!isLive) {
        return null;
    }

    const handleOpenYouTube = () => {
        window.open('https://www.youtube.com/@saoluizgonzagasapiranga/streams', '_blank');
    };

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
                borderColor={'red.400'}
                cursor={'pointer'}
                onClick={handleOpenYouTube}
                _hover={{
                    transform: 'translateY(-2px)',
                    shadow: 'xl',
                    borderColor: 'red.500',
                }}
                transition={'all 0.3s ease'}
            >
                <HStack w="full" justify={'space-between'} align={'center'}>
                    <Stack gap={3}>
                        <Box animation={`${pulseAnimation} 2s infinite`} color={'red.500'}>
                            <Icon size="xl">
                                <PiYoutubeLogo />
                            </Icon>
                        </Box>
                        <Stack gap={1} textAlign={'left'}>
                            <Text fontWeight={700} fontSize={'lg'} color={'red.600'}>
                                ESTAMOS AO VIVO NO YOUTUBE
                            </Text>
                        </Stack>
                    </Stack>
                </HStack>

                <Stack gap={2}>
                    <Text fontSize={'md'} fontWeight={600} color={'gray.800'}>
                        Missa das 19h - Quarta-feira
                    </Text>
                    <Text fontSize={'sm'} color={'gray.600'}>
                        Clique para assistir ao vivo no YouTube
                    </Text>
                </Stack>

                <HStack gap={2} color={'gray.600'} justify={'center'} w="full">
                    <Box
                        w={2}
                        h={2}
                        bg={'red.500'}
                        borderRadius={'full'}
                        animation={`${pulseAnimation} 1.5s infinite`}
                    />
                    <Text fontSize={'sm'} fontWeight={500}>
                        Transmissão ativa agora
                    </Text>
                </HStack>
            </Stack>
        </Box>
    );
}
