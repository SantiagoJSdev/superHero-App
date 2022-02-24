import { Navigate, Route, Routes } from "react-router-dom"
import { DetailScreen } from "../pages/DetailScreen"
import { PrincipalScreen } from "../pages/PrincipalScreen"
import { SearchScreen } from "../pages/SearchScreen"


export const RouterApp = () => {
  return (
    <Routes>

    <Route path="/" element= {<PrincipalScreen/>}/>
    <Route path="/search" element= {<SearchScreen/>}/>
    <Route path="/detail/:id" element= {<DetailScreen/>}/>
    <Route path="*" element={<Navigate to="/" />} />

</Routes>
  )
}

