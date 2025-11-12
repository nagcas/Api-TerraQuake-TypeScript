import type { Earthquake } from '../../types/earthquake.interface';

interface TableEarthquakesProps {
  earthquakes: Earthquake.Feature[] | null;
  loading: boolean;
}

export default function TableEarthquakes({
  earthquakes,
  loading,
}: TableEarthquakesProps) {
  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div
          className='spinner-border text-primary'
          role='status'
        >
          <span className='visually-hidden'>Caricamento...</span>
        </div>
      </div>
    );
  }

  if (!earthquakes || earthquakes.length === 0) {
    return (
      <div
        className='alert alert-warning text-center'
        role='alert'
      >
        Nessun evento sismico recente trovato.
      </div>
    );
  }

  return (
    <div className='table-responsive'>
      <table className='table table-striped table-hover align-middle shadow-sm'>
        <thead className='table-primary'>
          <tr>
            <th scope='col'>Data / Ora</th>
            <th scope='col'>Luogo</th>
            <th scope='col'>Magnitudo</th>
            <th scope='col'>Profondità (km)</th>
          </tr>
        </thead>
        <tbody>
          {earthquakes.map((eq) => (
            <tr key={eq.properties.eventId}>
              <td>{new Date(eq.properties.time).toLocaleString()}</td>
              <td>{eq.properties.place}</td>
              <td>
                <span
                  className={`badge bg-${
                    eq.properties.mag >= 6
                      ? 'danger'
                      : eq.properties.mag >= 5
                      ? 'warning'
                      : 'success'
                  } fs-6`}
                >
                  {eq.properties.mag.toFixed(1)} {eq.properties.magType}
                </span>
              </td>
              <td>{eq.geometry.coordinates[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
