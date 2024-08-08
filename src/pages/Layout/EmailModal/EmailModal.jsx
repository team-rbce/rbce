import React from 'react';
import PropTypes from 'prop-types';
import EmailModalForm from './EmailModalForm';
import Modal from '../../../components/Modal/Modal';

export default function EmailModal({ setIsModalOpen }) {
  return (
    <Modal>
      <h3 className="mb-4 font-medium h-full">Entre em Contato</h3>
      <EmailModalForm setIsModalOpen={ setIsModalOpen } />
      <button
        aria-label="close modal"
        className="absolute right-4 top-2 font-sans"
        onClick={ () => setIsModalOpen((prevState) => !prevState) }
      >
        X
      </button>
    </Modal>

  );
}

EmailModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
