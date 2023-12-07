import ToggleMenu from "Components/toggleMenu"
import Footer from "./Footer/page"
import Sidebar from "Components/sidebar"

export default function Web() {
  return (
    <>
      <div className="flex h-screen w-full flex-col ">
        <Sidebar />
        <ToggleMenu />

        {/* LANDING PAGE */}

        <Footer />
      </div>
    </>
  )
}
