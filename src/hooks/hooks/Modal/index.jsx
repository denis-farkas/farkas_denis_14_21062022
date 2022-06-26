import React from 'react';
import ReactDOM from 'react-dom';
import Update from '../Update';
import './modal.css';

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>Update Name</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Update />
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
