// import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/admin">admin</a>
            <br/>
            <a href="/user">user</a>
          </nav>
        </header>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
