import React from 'react';

export default function VisibilityControl({ show, setShow }) {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        checked={show}
        onChange={e => setShow(e.target.checked)}
        id="toggleTable"
      />
      <label className="form-check-label" htmlFor="toggleTable">
        Show Reservations Table
      </label>
    </div>
  );
}
