import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/firstPage/firstPage'
import ChooseLang from './components/lirics/chooseLang/chooseLang'
import EnglishList from "./components/lirics/englishList/englishList"
import LoveStreet from './components/lirics/allMusics/loveStreet'
import PerfectDay from './components/lirics/allMusics/perfectDay'


function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } ></Route>
                <Route path='/chooseLang' element={<ChooseLang/>} ></Route>
                <Route path='/englishList' element={<EnglishList/>} ></Route>
                <Route path='/loveStreet' element={<LoveStreet/>} ></Route>
                <Route path='/perfectDay' element={<PerfectDay/>} ></Route>

            </Routes>
        </BrowserRouter>
    ) 
}

export default AppRoutes