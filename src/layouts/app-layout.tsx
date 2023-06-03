import HeaderComponent from "../components/header/header"
import PlusStickButtonComponent from "../components/plus-sticky-button/plus-sticky-button"
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative w-full sm:max-w-sm min-h-screen m-auto border">
        <HeaderComponent />

        <Outlet />

        <PlusStickButtonComponent />
    </div>
  )
}

export default AppLayout