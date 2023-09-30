
 const metadata = {
  title: 'TopForX',
  description: 'Website for tracking chart and forex news!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export {metadata};
