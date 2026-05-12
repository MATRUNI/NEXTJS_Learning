import Link from "next/link";

// import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav
          style={{
            display:"flex",
            gap:"1rem"
          }}
          >
            <Link href="/user">User</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
