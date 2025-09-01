import { ContactCard } from './contact-card';
import { Stack, Text } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export function SiteDioceseNH() {
    return (
        <ContactCard
            contact={{
                title: 'Site da Diocese',
                icon: <LuExternalLink />,
                iconColor: '#000000',
                buttonText: 'Acessar site',
                buttonLink: 'https://diocesenh.org.br/',
            }}
        >
            <Stack align={'flex-start'} gap={5} w="full" mt={4} mb={8}>
                <Text fontWeight={500}>Acesse o site da Diocese de Novo Hamburgo</Text>
            </Stack>
        </ContactCard>
    );
}
