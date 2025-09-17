import "./globals.css";

export const metadata = {
  title: "Jail Budi Arie | Memecoin",
  description: "Budi is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
