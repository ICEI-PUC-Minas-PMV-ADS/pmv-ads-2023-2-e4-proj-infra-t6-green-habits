import React, { useState } from 'react';
import { Button } from '../../atoms/Button/index';
import { Icon } from '@/components/atoms/Icon'
import { Input } from '@/components/molecules/Input'

import styles from './styles.module.scss'

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [hideButtons, sethideButtons] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowButtons(false);
    sethideButtons(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowButtons(true);
    sethideButtons(false);
  };

  return (
    <>
      {showButtons && (
        <Button label="Mostrar Modal" level="primary" onClick={openModal} />
      )}

      <div className={styles.modal}>
        {isOpen && (
          <>
            <div className={styles.modal_inner}>
              <div className={styles.modal_x_button}>
                <Icon icon='x'></Icon>
              </div>

              <Input label='Qual é a sua meta?' id='meta' placeholder='Digite sua meta' type='text' className={styles['input_field']} />


              <Button label='Adicionar Meta' level="primary" onClick={closeModal} className={styles.modal_buttons} />
              <Button label='Fechar' level="tertiary" onClick={closeModal} className={styles.modal_buttons} />
            </div>
          </>
        )}
      </div>
    </>
  );

};

export default Modal;
