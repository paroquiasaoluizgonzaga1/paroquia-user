import { Flex, Heading, Stack } from '@chakra-ui/react';
import { WhatsappCard } from './whatsapp-card';
import { FacebookCard } from './facebook-card';
import { InstagramCard } from './instagram-card';
import { SiteDioceseNH } from './site-diocese-nh';
import { SiteVaticano } from './site-vaticano';
import { YoutubeCard } from './youtube-card';

export function ContactSection() {
    return (
        <Flex flexDir={'column'} justify={'center'} align={'center'} gap={8} bg={'gray.300'} py={8}>
            <Heading fontWeight={700} fontSize={'xl'}>
                Contato e redes sociais
            </Heading>
            <Stack w="full" px={5} maxW={'500px'} gap={10}>
                <WhatsappCard />
                <FacebookCard />
                <YoutubeCard />
                <InstagramCard />
                <SiteDioceseNH />
                <SiteVaticano />
            </Stack>
        </Flex>
    );
}
