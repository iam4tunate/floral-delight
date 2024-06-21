import "./globals.css";

export const metadata = {
  title: "Floral Delight",
  description: "Home of beatiful gifts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
