import Modal from 'react-modal'
import './styles.js'

export const ModalCadastroTec = ({modalIsOpen, setIsOpen}) => {

    
  Modal.setAppElement('#root')



  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


    return (
        <>
        <Modal
        isOpen={modalIsOpen}
        
        
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div>
            <div>
            <p>Texto de teste</p>
            <button onClick={() => {closeModal}}  >X</button>
            </div>

            <input></input>
            <input></input>
            <button>Cadastrar Tec</button>
          </div>


      </Modal>


    </>
    )
}