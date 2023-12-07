<<<<<<< HEAD
import { ModeToggle } from "@/components/ui/toggle-mode"
import ToggleMenu from "Components/toggleMenu"

export default function Web() {
  return (
    <div className="flex h-screen w-full flex-col ">
      <div className="flex-1">
        <span className="tablet:hidden float-right flex">
          <ModeToggle />
        </span>
        <span className="float-right flex">
          <ToggleMenu />
        </span>
        {/* <span className="float-right flex"></span> */}
      </div>
=======
import Footer from "./Footer/page";


export default function Web() {
  return (
    <>

    <div className="w-full h-screen flex flex-col ">
          {/* LANDING PAGE */}
        <Footer />


>>>>>>> 504d69972945784867aec59b918389024f99913f
    </div>
  )
}
