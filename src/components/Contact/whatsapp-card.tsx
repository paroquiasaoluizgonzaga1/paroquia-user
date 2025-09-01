import { FaWhatsapp } from 'react-icons/fa6';
import { ContactCard } from './contact-card';
import { Flex, Stack, Text } from '@chakra-ui/react';

export function WhatsappCard() {
    return (
        <ContactCard
            contact={{
                title: 'WhatsApp',
                icon: <FaWhatsapp />,
                iconColor: '#0CC042',
                buttonText: 'Fale conosco',
                buttonLink: 'https://api.whatsapp.com/send?phone=555130642612',
            }}
        >
            <Stack align={'flex-start'} gap={5} w="full">
                <Text fontWeight={500}>Fale conosco através do WhatsApp</Text>
                <Text fontWeight={700}>Horários de atendimento:</Text>
                <Stack gap={0}>
                    <Text fontWeight={500}>Segunda a sexta:</Text>
                    <Text>08h às 11h - 13h30 às 18h30</Text>
                </Stack>
                <Stack gap={0}>
                    <Text fontWeight={500}>Sábado:</Text>
                    <Text>08h às 12h</Text>
                </Stack>
                <Flex w="full" justify={'center'}>
                    <Text fontWeight={500}>(51) 3064-2612</Text>
                </Flex>
            </Stack>
        </ContactCard>
    );
}
