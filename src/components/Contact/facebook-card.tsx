import { FaFacebook } from 'react-icons/fa6';
import { ContactCard } from './contact-card';
import { Stack, Text } from '@chakra-ui/react';

export function FacebookCard() {
    return (
        <ContactCard
            contact={{
                title: 'Facebook',
                icon: <FaFacebook />,
                iconColor: '#1877F2',
                buttonText: 'Acessar página',
                buttonLink: 'https://www.facebook.com/parslgonzaga',
            }}
        >
            <Stack align={'flex-start'} gap={5} w="full" mt={4} mb={8}>
                <Text fontWeight={500}>Siga nossa página no Facebook</Text>
            </Stack>
        </ContactCard>
    );
}
