import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webweaver',
  description: 'Webweaver is a fast, modern, and intuitive code editor built for web developers. Easily write, edit, and preview HTML, CSS, and JavaScript code in real-time — all within your browser. Boost your productivity with smart features, clean UI, and a seamless development experience.',
 keywords: ['Webweaver', 'code editor', 'web development', 'online code editor', 'HTML editor', 'CSS editor', 'JavaScript editor', 'browser code editor', 'real-time preview', 'web dev tools', 'online IDE'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      <head>
          <link rel="icon" href="/logo.svg" /> 
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
