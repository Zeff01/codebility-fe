import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeModeToggle } from "@/components/ui/thememodetoggle"
import ToggleMenu from "Components/toggleMenu"
import Sidebar from "Components/sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Sidebar />
          <ToggleMenu />
          <ThemeModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
