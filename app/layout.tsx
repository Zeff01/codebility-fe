import { ThemeProvider } from "Components/theme-provider"
import Topbar from "Components/topbar"
import Sidebar from "Components/sidebar"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex h-screen w-screen bg-background">
            <Sidebar />
            <div className="flex h-screen flex-col bg-background">
              <Topbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
