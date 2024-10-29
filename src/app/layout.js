
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import './globals.css'





export const metadata = {
  title: 'ITNex Solutions',
  description: 'ITNex Solutions is a web and mobile development company. Its services include web development, mobile development, and digital marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-poppins '>
      <Header />
        <main>
         
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
