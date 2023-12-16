// import { ThemeProvider } from "@/components/ui/ThemeToggler (unused)/theme-provider"
// import { ThemeModeToggle } from "@/components/ui/ThemeToggler (unused)/thememodetoggle"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Remove dark to run normal mode
    <html lang="en" className="dark">
      <body>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange 
          > */}
            {/* <ThemeModeToggle /> */}
          {children}
          {/* </ThemeProvider> */}
          </body>
    </html>
  )
}
