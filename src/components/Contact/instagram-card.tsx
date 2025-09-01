import { FaInstagram } from 'react-icons/fa6';
import { ContactCard } from './contact-card';
import { Stack, Text } from '@chakra-ui/react';

export function InstagramCard() {
    return (
        <ContactCard
            contact={{
                title: 'Instagram',
                icon: <FaInstagram />,
                iconColor: '#E1306C',
                buttonText: 'Acessar perfil',
                buttonLink: 'https://www.instagram.com/saoluizgonzaga_paroquia',
            }}
        >
            <Stack align={'flex-start'} gap={5} w="full" mt={4} mb={8}>
                <Text fontWeight={500}>Siga nosso perfil no Instagram</Text>
            </Stack>
        </ContactCard>
    );
}
