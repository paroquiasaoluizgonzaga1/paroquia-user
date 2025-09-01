import { FaYoutube } from 'react-icons/fa6';
import { ContactCard } from './contact-card';
import { Stack, Text } from '@chakra-ui/react';

export function YoutubeCard() {
    return (
        <ContactCard
            contact={{
                title: 'YouTube',
                icon: <FaYoutube />,
                iconColor: '#FF0000',
                buttonText: 'Acessar canal',
                buttonLink: 'https://www.youtube.com/@saoluizgonzagasapiranga',
            }}
        >
            <Stack align={'flex-start'} gap={5} w="full" mt={4} mb={8}>
                <Text fontWeight={500}>Inscreva-se no nosso canal no YouTube</Text>
                <Text fontWeight={400}>Transmissões ao vivo das Missas nas quartas-feiras às 19h</Text>
            </Stack>
        </ContactCard>
    );
}
