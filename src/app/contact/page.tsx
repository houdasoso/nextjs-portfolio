'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <>
      <h1>Contact Me</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          alert(`Thanks, ${email}! I’ll reply soon 🙂`);
          setEmail(''); setMsg('');
        }}
        style={{ display: 'grid', gap: '1rem', maxWidth: 480 }}
      >
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          required
          value={msg}
          onChange={e => setMsg(e.target.value)}
          rows={5}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
