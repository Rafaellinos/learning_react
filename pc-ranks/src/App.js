import './App.css';
import {useState} from "react";

import AddPcModal from "./components/modal/add-pc.modal";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lsPc, setLsPc] = useState([{
        id: 1,
        pcUsuario: "Rafael",
        pcCPU: "Ryzen 5600x",
        pcGPU: "RTX 3070 Galax",
        pcRam: "16gm DDR4",
        pcFonte: "Sharkoon 550w"
    }]);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
    <div className="App">
        <header className="header">Header</header>
        <div className='lista-pcs'>
            {lsPc.map(pc => {
                return (
                    <div className={`pc-item-${pc.id}`}>
                        <div>Usuário: {pc.pcUsuario}</div>
                        <div>CPU: {pc.pcCPU}</div>
                        <div>GPU: {pc.pcGPU}</div>
                        <div>RAM: {pc.pcRam}</div>
                        <div>Fonte: {pc.pcFonte}</div>
                    </div>
                )
            })}
        </div>
        <button className='add-pc-btn' onClick={toggleModal}>Adicionar PC</button>
        { isOpen ? <AddPcModal toggleModal={toggleModal} setLsPc={setLsPc}/> : null}
    </div>
    );
}

export default App;
