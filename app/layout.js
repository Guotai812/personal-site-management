import "./globals.css";



export const metadata = {
  title: "Login",
  description: "Login Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
