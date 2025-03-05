import { BrowserRouter, Route, Routes } from "react-router";
import FeaturePage from './Components/FeaturePage';
import Company from './Components/Company';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Error from "./Components/Error";
import CommonLayout from "./Components/CommonLayout";
import Home from "./Components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CommonLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/features' element={<FeaturePage/>}></Route>
        <Route path='/company' element={<Company/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>}></Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
