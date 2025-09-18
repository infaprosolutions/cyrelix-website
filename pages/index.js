import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <img src="/logo.png" alt="Cyrelix Logo" width="200" />
      <h1>Welcome to Cyrelix</h1>
      <p>Modern AI-powered Vulnerability Management Platform.</p>

      <nav style={{ marginTop: "20px" }}>
        <Link href="/features" style={{ margin: "0 15px" }}>Features</Link>
        <Link href="/about" style={{ margin: "0 15px" }}>About</Link>
        <Link href="/contact" style={{ margin: "0 15px" }}>Contact</Link>
      </nav>
    </div>
  );
}
