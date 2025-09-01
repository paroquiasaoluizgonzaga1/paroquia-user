import { Footer } from '@/components/Footer/footer';
import { Flex } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BasePageHeader } from '@/components/Header/base-page-header';
import { headerStore } from '@/stores/headerStore';

export function DefaultPage() {
    const location = useLocation();
    const { setHeader } = headerStore();

    useEffect(() => {
        setHeader(location.pathname);
    }, [location]);

    return (
        <Flex flexDir={'column'} w="full">
            {location.pathname !== '/' && <BasePageHeader />}
            <Outlet />
            <Footer />
        </Flex>
    );
}
