import React  from 'react';
import ReactModal from 'react-modal';
import customModal from './customModal.css'
import CalendarComponent from '../calendar/CalendarComponent';

const CustomModal = ({ isOpen, onRequestClose, }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    width: '60%',
                    height: '88%',
                    margin: '24px auto',
                },
            }}
        >
            <h2 className='tituloTurnero'>TAKE YOUR TURN</h2>
            <CalendarComponent></CalendarComponent>
            <button className='btn-modal-cerrar' onClick={onRequestClose}>X</button>
        </ReactModal>
    );
}

export default CustomModal;