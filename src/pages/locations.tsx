import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { type IMassLocation } from '@/interfaces/IMassLocation';
import { toaster } from '@/components/ui/toaster';
import { LocationsHeader } from '@/components/Locations/locations-header';
import { LocationsSection } from '@/components/Locations/locations-section';

export function Locations() {
    const [headquarters, setHeadquarters] = useState<IMassLocation | null>(null);
    const [locations, setLocations] = useState<IMassLocation[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMassLocations = () => {
            api.get<IMassLocation[]>('mass-locations')
                .then((response) => {
                    const locationHeadquarters = response.data.find((location) => location.isHeadquarters);

                    if (locationHeadquarters) {
                        setHeadquarters(locationHeadquarters);
                    }

                    setLocations(response.data.filter((location) => !location.isHeadquarters));
                })
                .catch(() => {
                    toaster.error({ title: 'Erro ao buscar locais de missas' });
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        fetchMassLocations();
    }, []);

    return (
        <>
            <LocationsHeader headquarters={headquarters} isLoading={isLoading} />
            <LocationsSection locations={locations} isLoading={isLoading} />
        </>
    );
}
