import { NavLink } from 'react-router-dom';
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot } from './ui/breadcrumb';

export interface IBreadcrumbLink {
    title: string;
    link?: string;
}

interface CustomBreadcrumbProps {
    items: IBreadcrumbLink[];
    current: string;
}

export function CustomBreadcrumb({ items, current }: CustomBreadcrumbProps) {
    return (
        <BreadcrumbRoot fontWeight={500}>
            {items.map((item) =>
                item.link ? (
                    <NavLink to={item.link} key={item.title}>
                        <BreadcrumbLink as={'p'} color={'white'} minW={'45px'}>
                            {item.title}
                        </BreadcrumbLink>
                    </NavLink>
                ) : (
                    <BreadcrumbLink as={'p'} key={item.title} color={'white'}>
                        {item.title}
                    </BreadcrumbLink>
                )
            )}
            <BreadcrumbCurrentLink color={{ base: 'brand.400', _dark: 'brand.300' }}>{current}</BreadcrumbCurrentLink>
        </BreadcrumbRoot>
    );
}
