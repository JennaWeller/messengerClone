import '../styles/globals.css'
import Header from './Header'
import {Providers} from "./providers";
import {getServerSession} from "next-auth/next";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const session = await getServerSession();

  return (
    <html>
    <head/>
    
     <body> 
        {/* @ts-ignore */}
        <Header/>
        <Providers>{children}</Providers>
    </body> 
     </html>
  
  )
}
