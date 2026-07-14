'use client';

import { FormEvent, useState } from 'react';

export default function LeadForm() {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('Conocer disponibilidad');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hola, soy ${name || 'un prospecto'}. Me interesa ${interest.toLowerCase()} en Terrenos Frente al Río.`;
    window.open(`https://wa.me/526684195973?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="lead-form reveal tilt-card" onSubmit={submit}>
      <label>
        Nombre
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="¿Cómo te llamas?"
          required
        />
      </label>
      <label>
        Me interesa
        <select value={interest} onChange={(event) => setInterest(event.target.value)}>
          <option>Conocer disponibilidad</option>
          <option>Agendar una visita</option>
          <option>Conocer las condiciones de pago</option>
          <option>Recibir una cotización</option>
        </select>
      </label>
      <button type="submit">Continuar por WhatsApp <span aria-hidden="true">↗</span></button>
      <p>Te atenderemos directamente en el número 668 419 5973.</p>
    </form>
  );
}
