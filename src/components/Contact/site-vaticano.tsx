import { ContactCard } from './contact-card';
import { Stack, Text } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export function SiteVaticano() {
    return (
        <ContactCard
            contact={{
                title: 'Site do Vaticano',
                icon: <LuExternalLink />,
                iconColor: '#000000',
                buttonText: 'Acessar site',
                buttonLink: 'https://www.vaticannews.va/pt.html',
            }}
        >
            <Stack align={'flex-start'} gap={5} w="full" mt={4} mb={8}>
                <Text fontWeight={500}>Acesse o site do Vaticano</Text>
            </Stack>
        </ContactCard>
    );
}
