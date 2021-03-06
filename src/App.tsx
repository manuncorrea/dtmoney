import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalSytle } from "./styles/global";
import { TransactionProvider } from './hooks/useTransactions';

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
    <TransactionProvider>
      <Header onOpenNewTransctionModal={handleOpenTransactionModal} />
      <Dashboard />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
       />
      <GlobalSytle />
    </TransactionProvider>
  );
}


