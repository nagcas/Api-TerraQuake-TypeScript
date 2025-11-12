import { useCallback } from 'react';
import useEarthquakes from '../../hooks/useEarthquakes';
import TableEarthquakes from '../tableEarthquakes/TableEarthquakes';

export default function Home() {
  const { earthquakes, loading, refetch } = useEarthquakes();

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <section className="container my-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary mb-3">
          TerraQuake Dashboard
        </h1>
        <p className="text-muted fs-5">
          Monitoraggio sismico in tempo reale tramite la <strong>TerraQuake API</strong>.<br />
          Visualizza gli ultimi eventi registrati, la magnitudo e la profondità.
        </p>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={handleRefresh}
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              />
              Aggiornamento...
            </>
          ) : (
            <>
              🔄 Aggiorna dati
            </>
          )}
        </button>
      </div>

      {/* Table Section */}
      <div className="card border-0 shadow-lg">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Eventi Sismici Recenti</h5>
          <small className="text-light">
            Ultimo aggiornamento: {new Date().toLocaleTimeString()}
          </small>
        </div>
        <div className="card-body">
          <TableEarthquakes earthquakes={earthquakes} loading={loading} />
        </div>
      </div>

      {/* Footer JSON Debug (solo se utile per test) */}
      {!loading && earthquakes && (
        <div className="mt-4">
          <details>
            <summary className="text-muted">Mostra JSON completo</summary>
            <pre className="bg-light p-3 rounded mt-2">
              {JSON.stringify(earthquakes, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </section>
  );
}

