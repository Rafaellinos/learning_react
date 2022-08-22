import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component'
import Navigator from "./routes/navigator/navigator.component";
import Authentication from "./routes/authentication/authentication.component";


const Shop = () => {
    return (
        <div>
            SHOP
        </div>
    )
}

const App = () => {

  return (
      <Routes>
          <Route path="/" element={<Navigator />}>
              <Route index element={<Home />}/>
              <Route path="shop" element={<Shop />}/>
              <Route path="auth" element={<Authentication />}/>
          </Route>
      </Routes>
  )
}

export default App;
