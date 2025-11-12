import { useCallback, useEffect, useState } from 'react';
import type { Earthquake } from '../types/earthquake.interface';

export default function useEarthquakes() {
    const [earthquakes, setEarthquakes] = useState<Earthquake.Feature[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  // Funzione che recupera terremoti recenti (ritorna sia properties che geometry)
  const fetchRecentEarthquakes = useCallback(
    async (limit = 10): Promise<Earthquake.Feature[] | null> => {
      const params = new URLSearchParams({
        limit: String(limit),
        page: '1',
      }).toString();

      const url = `https://api.terraquakeapi.com/v1/earthquakes/recent?${params}`;

      setLoading(true);

      try {
        const response = await fetch(url);
        const data: Earthquake.Response = await response.json();

        if (response.ok) {
          console.log('Status:', response.status);
          console.log('Payload:', data.payload);
          setEarthquakes(data.payload);
        } else {
          console.error(
            `HTTP Error: ${response.status} ${response.statusText}`
          );
        }

        return data.payload;
      } catch (error) {
        console.error('API Error:', error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    // Primo fetch immediato
    fetchRecentEarthquakes();

    // Poi aggiorna ogni 60 secondi
    const intervalId = setInterval(() => {
      fetchRecentEarthquakes().then((result) => {
        if (result && result.length > 0) {
          const first = result[0];
          console.log('Evento simico: ');
          console.log('Location:', first.properties.place);
          console.log(
            'Magnitude:',
            first.properties.mag,
            first.properties.magType
          );
          console.log('Coordinates:', first.geometry.coordinates);
          console.log('Latitude:', first.geometry.coordinates[1]);
          console.log('Longitude:', first.geometry.coordinates[0]);
          console.log('Depth:', first.geometry.coordinates[2], 'km');
          console.log('Pagination:', first.pagination);
        }
      });
    }, 600000);

    // Cleanup: elimina l’intervallo al dismount
    return () => clearInterval(intervalId);
  }, [fetchRecentEarthquakes]);
  return { earthquakes, loading, refetch: fetchRecentEarthquakes };
}
