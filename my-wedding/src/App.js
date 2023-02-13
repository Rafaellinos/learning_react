import {Routes, Route} from "react-router-dom";
import Home from './routes/home.component'
import Header from "./routes/header.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>

            </Route>
        </Routes>
    );
}

export default App;
