import ToggleMenu from "Components/toggleMenu"
import Footer from "./Footer/page"
import Sidebar from "Components/sidebar"
import { ThemeModeToggle } from "@/components/ui/thememodetoggle"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full flex-col ">
        <Sidebar />
        <ToggleMenu />
        <ThemeModeToggle />
        {/* LANDING PAGE */}

        <Footer />
      </div>
    </>
  )
}
