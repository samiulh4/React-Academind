import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler()
    {
        setModalIsOpen(true);
        console.log(props.text);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
        console.log('Cancel Button Click');
    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && (
                <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            )}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
        </div>
    );
}

export default Todo;