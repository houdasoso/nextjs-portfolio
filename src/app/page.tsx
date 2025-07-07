import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Hello, I’m Houda 👋</h1>
      <p>
        Front‑end developer specialising in React, TypeScript & Next.js.
      </p>
      <Image
        src="/profile.jpg"
        alt="Houda"
        width={160}
        height={160}
        style={{ borderRadius: '50%' }}
      />
    </>
  );
}
