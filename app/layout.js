import './globals.css'

export const metadata = {
  title: 'Final Deployment Test',
  description: '**The Ultimate Guide to Final Deployment Tests: Ensuring Success Before Launch**',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
