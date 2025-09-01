import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu';
import { sidebarStore } from '@/stores/sidebarStore';
import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

export function Menu() {
    const { menu } = sidebarStore();

    return (
        <MenuRoot positioning={{ placement: 'bottom-end' }}>
            <MenuTrigger color={'white'} cursor={'pointer'}>
                <Icon size={'2xl'}>
                    <IoMenu />
                </Icon>
                <Text fontSize={['xs', 'xs', 'sm']}>Menu</Text>
            </MenuTrigger>
            <MenuContent
                rounded={'lg'}
                minW={['320px', '500px']}
                bg={{ base: 'gray.100', _dark: 'gray.900' }}
                borderWidth={'1px'}
                borderColor={{ base: 'gray.100', _dark: 'gray.800' }}
                spaceY={4}
            >
                {menu.map((m) => (
                    <MenuItem key={m.href} value={m.href}>
                        <NavLink to={m.href} end>
                            {({ isActive }) => (
                                <HStack color={isActive ? 'brand.400' : 'inherit'}>
                                    {isActive ? m.iconActive : m.icon}
                                    <Box
                                        flex={1}
                                        fontWeight={isActive ? 'semibold' : 'regular'}
                                        color={isActive ? 'inherit' : { base: 'gray.400', _dark: 'gray.400' }}
                                    >
                                        {m.title}
                                    </Box>
                                </HStack>
                            )}
                        </NavLink>
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    );
}
