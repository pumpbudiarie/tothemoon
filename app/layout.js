import "./globals.css";

export const metadata = {
  title: "Jail $BUDIARIE | Memecoin",
  description: "Budi Arie is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
