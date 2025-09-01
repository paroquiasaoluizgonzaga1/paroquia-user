import { QuickAccessSection } from '@/components/QuickAccess/quick-access-section';
import { NewsSection } from '../components/News/news-section';
import { InitialSection } from '@/components/Initial/initial-section';
import { ContactSection } from '@/components/Contact/contact-section';

export function Home() {
    return (
        <>
            <InitialSection />
            <QuickAccessSection />
            <NewsSection />
            <ContactSection />
        </>
    );
}
