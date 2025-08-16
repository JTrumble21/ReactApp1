import React from 'react';
import ReservationRow from './reservationRow';

const AREAS = ['North Woods', 'River Bend', 'Oak Meadow', 'Cedar Ridge'];
const SLOTS = ['9:00am–12:00pm', '12:00pm–3:00pm', '3:00pm–6:00pm'];

export default function ReservationTable() {
  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>Conservation Area</th>
          <th>Time Slot</th>
          <th>Booked</th>
        </tr>
      </thead>
      <tbody>
        {AREAS.flatMap(area =>
          SLOTS.map(slot => (
            <ReservationRow key={`${area}-${slot}`} areaName={area} slotLabel={slot} />
          ))
        )}
      </tbody>
    </table>
  );
}
