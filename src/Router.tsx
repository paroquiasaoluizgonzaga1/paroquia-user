import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Locations } from './pages/locations';
import { DefaultPage } from './layouts/default-page';
import { OtherSchedulesSection } from './components/OtherSchedules/other-schedules-section';
import { OtherScheduleTypes } from './constants/OtherScheduleTypes';
import { TransparencyPortal } from './pages/transparency-portal';
import { Pix } from './pages/pix';
import { News } from './pages/news';
import { NewsById } from './pages/news-by-id';
import { Tithe } from './pages/tithe';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultPage />}>
                <Route path="/" element={<Home />} />
                <Route path="/horarios-de-missas" element={<Locations />} />
                <Route
                    path="/pastorais-grupos-e-servicos"
                    element={<OtherSchedulesSection type={OtherScheduleTypes.GroupsAndServices} />}
                />
                <Route path="/sacramentos" element={<OtherSchedulesSection type={OtherScheduleTypes.Sacrament} />} />
                <Route path="/portal-da-transparencia" element={<TransparencyPortal />} />
                <Route path="/faca-sua-doacao" element={<Pix />} />
                <Route path="/avisos" element={<News />} />
                <Route path="/avisos/:id" element={<NewsById />} />
                <Route path="/cadastro-de-dizimista" element={<Tithe />} />
            </Route>
        </Routes>
    );
}
