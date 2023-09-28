import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-zinc-900">
      <head>
        <title>Crossword Scoreboard</title>
      </head>
      <body className="w-full h-full text-white">{children}</body>
    </html>
  );
}
