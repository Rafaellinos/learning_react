import './add-pc.modal.css';

const AddPcModal = ({ toggleModal, setLsPc }) => {

    const funcSalvarPc = () => {

        //setLsPc
    }

    return (
        <div className="modal-backgroud">
            <div className="add-pc-mocal-container" id="add-pc-mocal-container">
                <button className="close-btn" onClick={toggleModal}>
                    <span typeof="text">&times;</span>
                </button>
                <div className="header-modal">
                    Insira as informações do PC:
                </div>
                <div className="flex-outer">
                    <label htmlFor="first-name">Usuário</label>
                    <input type="text" id="first-name" placeholder="Escolha um usuário"/>

                    <label htmlFor="last-name">CPU</label>
                    <input type="text" id="last-name" placeholder="Escolha uma CPU"/>

                    <label htmlFor="email">GPU</label>
                    <input type="text" id="email" placeholder="Escolha uma GPU"/>

                    <label htmlFor="phone">Memória RAM</label>
                    <input type="text" id="phone" placeholder="Escolha memória ram"/>

                    <label htmlFor="message">Fonte</label>
                    <input type="text" id="message" placeholder="Escolha fonte"></input>

                </div>
                <div className="bottom-modal">
                    <button className="btn-action add-pc-action">
                        <span typeof="text">Adicionar PC</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPcModal