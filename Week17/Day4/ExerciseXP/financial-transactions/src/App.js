import React from 'react';
import TransactionForm from './components/transactionForm';
import TransactionList from './components/transactionList';
import './App.css'

function App() {
  return (
    <div>
      <h1>Financial Transactions App</h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
