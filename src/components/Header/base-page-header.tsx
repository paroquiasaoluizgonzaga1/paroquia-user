import { Flex, Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import { CustomBreadcrumb } from '../CustomBreadcrumb';
import { Menu } from './Menu';
import { headerStore } from '@/stores/headerStore';

export function BasePageHeader() {
    const { header } = headerStore();

    return (
        <Flex
            bg={header.bg}
            justify={'center'}
            bgImage={header?.imagePath ? `url(${header.imagePath})` : ''}
            bgSize={'cover'}
            minH={'230px'}
        >
            <Stack pt={5} px={4} gap={12} w={'full'} maxW={'800px'}>
                <HStack justify={'space-between'} as={'header'} align={'center'}>
                    <CustomBreadcrumb items={[{ title: 'Home', link: '/' }]} current={header.title} />
                    <Menu />
                </HStack>
                <HStack gap={4} justify={'center'}>
                    <Icon color={header.iconColor} size={'2xl'}>
                        {header.icon}
                    </Icon>
                    <Heading as={'h1'} color={'white'} fontSize={'3xl'}>
                        {header.title}
                    </Heading>
                </HStack>
            </Stack>
        </Flex>
    );
}
