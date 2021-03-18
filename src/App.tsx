import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalSytle } from "./styles/global";

//Configurando Modal
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransctionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
         <h2>Cadastrar transction</h2>
      </Modal>
      <GlobalSytle />
    </>
  );
}


