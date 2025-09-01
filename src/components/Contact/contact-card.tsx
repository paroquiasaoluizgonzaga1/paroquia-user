import type { IContactCard } from '@/interfaces/IContactCard';
import { HStack, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { Button } from '../ui/button';

interface IContactCardProps {
    contact: IContactCard;
    children: React.ReactNode;
}

export function ContactCard({ contact, children }: IContactCardProps) {
    return (
        <Stack rounded={'2xl'} p={7} bg={'white'} w={'full'} align={'flex-start'} gap={5} shadow={'lg'}>
            <HStack justify={'space-between'} w="full">
                <Text fontWeight={700} fontSize={'lg'} color={'blue.800'}>
                    {contact.title}
                </Text>
                <Icon color={contact.iconColor} size={'xl'}>
                    {contact.icon}
                </Icon>
            </HStack>
            {children}
            <Button
                rounded={'full'}
                fontSize={'lg'}
                fontWeight={700}
                bg={'#0D3D71'}
                color={'white'}
                _hover={{ bg: '#1B4D85' }}
                px={6}
                py={5}
                mx={'auto'}
            >
                <Link href={contact.buttonLink} target="_blank" rel="noopener noreferrer" color={'white'}>
                    {contact.icon}
                    {contact.buttonText}
                </Link>
            </Button>
        </Stack>
    );
}
