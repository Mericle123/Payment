import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSend = () => {
    if (!recipientAddress || !amount) {
      alert('Please enter both recipient address and amount.');
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      recipient: recipientAddress,
      amount: parseFloat(amount),
      timestamp: new Date().toLocaleString(),
    };

    setTransactions([...transactions, newTransaction]);
    setRecipientAddress('');
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 text-white font-sans">
      <header className="p-6 bg-gray-800">
        <h1 className="text-3xl font-bold">Blockchain Payment App</h1>
      </header>

      <main className="container mx-auto p-6">
        <section className="bg-white shadow-md rounded-lg p-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Send Payment</h2>
          <div className="mb-4">
            <label htmlFor="recipientAddress" className="block text-sm font-medium mb-1">Recipient Address:</label>
            <input
              type="text"
              id="recipientAddress"
              className="mt-1 p-2 border rounded-md w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter recipient's blockchain address"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount:</label>
            <input
              type="number"
              id="amount"
              className="mt-1 p-2 border rounded-md w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button
            onClick={handleSend}
            disabled={!recipientAddress || !amount}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow-md disabled:opacity-50 transition duration-150"
          >
            Send
          </button>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-lg p-8 text-gray-700 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Transaction History</h2>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Recipient</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="border px-4 py-2">{tx.id.slice(0, 8)}</td>
                  <td className="border px-4 py-2">{tx.recipient}</td>
                  <td className="border px-4 py-2">{tx.amount}</td>
                  <td className="border px-4 py-2">{tx.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

     
    </div>
  );
}

export default App;