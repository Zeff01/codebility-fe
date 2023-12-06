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
    </div>
  )
}
