
import './globals.css'





export const metadata = {
  title: 'SDE Solutions',
  description: 'SDE Solutions is a web and mobile development company. Its services include web development, mobile development, and digital marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-poppins'>
        <main >
          {children}
        </main>
      </body>
    </html>
  )
}
