import React, { useState } from 'react';
import ReservationBanner from './reservationBanner';
import ReservationTable from './reservationTable';
import VisibilityControl from './visibilityControl';

export default function App() {
  const [showTable, setShowTable] = useState(true);

  return (
    <div className="container my-4">
      <ReservationBanner title="Canada Parks Reservations" />

      <div className="mb-3">
        <button className="btn">Add Reservation</button>
        <button className="btn">Edit Reservation</button>
        <button className="btn">Delete Reservation</button>
      </div>

      <VisibilityControl show={showTable} setShow={setShowTable} />

      {showTable && <ReservationTable />}
    </div>
  );
}
