import React, { useState } from 'react';

export default function ReservationRow({ areaName, slotLabel }) {
  const [booked, setBooked] = useState(false); // track checkbox state

  return (
    <tr>
      <td>{areaName}</td>
      <td>{slotLabel}</td>
      <td className="text-center">
        <input
          type="checkbox"
          checked={booked}
          onChange={() => setBooked(!booked)} // toggle state
        />
      </td>
    </tr>
  );
}
