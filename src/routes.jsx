import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/firstPage/firstPage'
import ChooseLang from './components/lirics/chooseLang/chooseLang'
import EnglishList from "./components/lirics/englishList/englishList"
import LoveStreet from './components/lirics/allMusics/loveStreet'
import PerfectDay from './components/lirics/allMusics/perfectDay'
import HeavensDoor from './components/lirics/allMusics/heavensDoor'
import Sunseed from './components/lirics/allMusics/sunseed'
import InBetweenDays from "./components/lirics/allMusics/inBetweenDays"
import CameAsYouAre from "./components/lirics/allMusics/cameAsYouAre"
import Hurt from './components/lirics/allMusics/hurt'
import TheManHeSoldTheWorld from "./components/lirics/allMusics/theManHeSoldTheWorld"
import HowCouldIKnow from "./components/lirics/allMusics/howCouldIKnow"
import Linger from "./components/lirics/allMusics/linger"
import MeltWithYou from "./components/lirics/allMusics/iMeltWithYou"
import ZiggyStardust from "./components/lirics/allMusics/ziggyStardust"
import KarmaChameleon from "./components/lirics/allMusics/karmaChameleon"


function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } ></Route>
                <Route path='/chooseLang' element={<ChooseLang/>} ></Route>
                <Route path='/englishList' element={<EnglishList/>} ></Route>
                <Route path='/loveStreet' element={<LoveStreet/>} ></Route>
                <Route path='/perfectDay' element={<PerfectDay/>} ></Route>
                <Route path='/heavensDoor' element={<HeavensDoor/>} ></Route>
                <Route path='/sunseed' element={<Sunseed/>} ></Route>
                <Route path='/InBetweenDays' element={<InBetweenDays/>} ></Route>
                <Route path='/CameAsYouAre' element={<CameAsYouAre/>} ></Route>
                <Route path='/hurt' element={<Hurt/>} ></Route>
                <Route path='/theManHeSoldTheWorld' element={<TheManHeSoldTheWorld/>} ></Route>
                <Route path='/howCouldIKnow' element={<HowCouldIKnow/>} ></Route>
                <Route path='/linger' element={<Linger/>} ></Route>
                <Route path='/iMeltWithYou' element={<MeltWithYou/>} ></Route>
                <Route path='/ziggyStardust' element={<ZiggyStardust/>} ></Route>
                <Route path='/karmaChameleon' element={<KarmaChameleon/>} ></Route>

            </Routes>
        </BrowserRouter>
    ) 
}

export default AppRoutes