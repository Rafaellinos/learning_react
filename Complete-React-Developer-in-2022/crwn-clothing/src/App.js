import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component'
import Navigator from "./routes/navigator/navigator.component";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop = () => {
    return (
        <div>
            SHOPPPPP
        </div>
    )
}

const App = () => {

  return (
      <Routes>
          <Route path="/" element={<Navigator />}>
              <Route index element={<Home />}/>
              <Route path="shop" element={<Shop />}/>
              <Route path="sign-in" element={<SignIn />}/>
          </Route>
      </Routes>
  )
}

export default App;
