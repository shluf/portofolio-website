import { Inter } from 'next/font/google'
import SetupTransitions from './SetupTransitions'
import './globals.css'
import NavBar from './component/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salis Haidar | Portofolio',
  description: 'Salis Haidar Portofolio Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <SetupTransitions children={children} />
      </body>
    </html>
  )
}