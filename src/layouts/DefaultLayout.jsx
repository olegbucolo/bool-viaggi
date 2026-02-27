import { Outlet } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"

function DefaultLayout(){
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    )
}

export default DefaultLayout