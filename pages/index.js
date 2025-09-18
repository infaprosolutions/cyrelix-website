import Image from "next/image";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <Image src="/logo.png" alt="Cyrelix Logo" width={200} height={200} />
      <h1>Welcome to Cyrelix</h1>
      <p>Modern AI-powered Vulnerability Management Platform.</p>
    </main>
  );
}
