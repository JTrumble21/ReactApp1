import React, { useState } from 'react';

export default function ReservationCreator({ areas, slots, date, setDate, name, setName, addReservation }) {
  const [selectedArea, setSelectedArea] = useState(areas[0].id);
  const [selectedSlot, setSelectedSlot] = useState(slots[0].id);

  function handleSubmit(e) {
    e.preventDefault();
    addReservation(selectedArea, selectedSlot);
  }

  return (
    <form className="row g-3 mb-4" onSubmit={handleSubmit}>
      <div className="col-md-4">
        <label className="form-label">Date</label>
        <input type="date" value={date} min={new Date().toISOString().slice(0, 10)} onChange={e => setDate(e.target.value)} className="form-control" />
      </div>
      <div className="col-md-4">
        <label className="form-label">Your Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" />
      </div>
      <div className="col-md-4">
        <label className="form-label">Conservation Area</label>
        <select value={selectedArea} onChange={e => setSelectedArea(e.target.value)} className="form-select">
          {areas.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label">Time Slot</label>
        <select value={selectedSlot} onChange={e => setSelectedSlot(e.target.value)} className="form-select">
          {slots.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
      </div>
      <div className="col-md-4 align-self-end">
        <button type="submit" className="btn btn-primary">Reserve</button>
      </div>
    </form>
  );
}
