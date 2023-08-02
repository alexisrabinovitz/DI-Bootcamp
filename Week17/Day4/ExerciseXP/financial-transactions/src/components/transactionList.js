// The component imports necessary dependencies. It imports React from 'react' 
// for building the component, connect from 'react-redux' to connect the component 
// to the Redux store, and the action creators updateIndex and deleteTransaction 
// from '../actions/transactionActions'.


import React from 'react';
import { connect } from 'react-redux';
import { updateIndex, deleteTransaction } from '../actions/transactionAction';



// The TransactionList component is a functional component that renders a table 
// displaying the list of financial transactions. The component receives three props 
// (list, updateIndex, and deleteTransaction) from the Redux store due to the connect() 
// function.

// The handleEdit function is called when the "Edit" button is clicked. It 
// takes the index of the transaction as an argument and calls the updateIndex 
// action creator, which dispatches the UPDATE_INDEX action to the Redux store. 
// This action updates the currentIndex property in the store to the selected index, 
// allowing the transaction to be edited in the TransactionForm component.

// The handleDelete function is called when the "Delete" button is clicked. It takes 
// the id of the transaction as an argument and calls the deleteTransaction action 
// creator, which dispatches the DELETE action to the Redux store. This action 
// removes the transaction with the specified id from the list in the store, 
// updating the state accordingly.

// The component uses list.map() to render each transaction as a table row (<tr>). 
// It displays the transaction details in the table cells (<td>) 
// such as account number, FSC, name, and amount. For each transaction, 
// there are two buttons: "Edit" and "Delete".



const TransactionList = ({ list, updateIndex, deleteTransaction }) => {
  const handleEdit = (index) => {
    updateIndex(index);
  };

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", textAlign: "left", border: "1px " }}>Account Number</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px " }}>FSC</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px " }}>Name</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px " }}>Amount</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px " }}>Edit</th>
            <th style={{ padding: "8px", textAlign: "left", border: "1px " }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <td style={{ padding: "8px", textAlign: "left", border: "1px" }}>{item.accountNumber}</td>
              <td style={{ padding: "8px", textAlign: "left", border: "1px" }}>{item.FSC}</td>
              <td style={{ padding: "8px", textAlign: "left", border: "1px" }}>{item.name}</td>
              <td style={{ padding: "8px", textAlign: "left", border: "1px" }}>{item.amount}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "#D0B7F9",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  style={{
                    backgroundColor: "#9864E9",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



// mapStateToProps: It maps the list from the Redux store's state to the list prop 
// of the TransactionList component. This allows the component to access the list 
// of transactions from the store as a prop.


const mapStateToProps = (state) => ({
  list: state.list,
});


// mapDispatchToProps: It maps the updateIndex and deleteTransaction action creators 
// to the corresponding props of the TransactionList component. This allows the 
// component to call these actions to update the Redux store when needed.

const mapDispatchToProps = {
  updateIndex,
  deleteTransaction,
};


// The connect() function is used to connect the TransactionList component to the 
// Redux store. It maps the state data and action creators to the component's props.

// Finally, the connected TransactionList component is exported, and it will receive 
// updates from the Redux store whenever the state changes due to dispatched actions. 
// This ensures that the component's view is updated in response to changes in the 
// transaction data, allowing for a dynamic and responsive user interface.

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);