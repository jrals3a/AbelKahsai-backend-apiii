// AbelKahsai-backend-api
// 4-21-25

// import react & axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// export whaleDashboard
export default function WhaleDashboard() {
    const [txns, setTxns] = useState([]);
    const [interval, setInterval] = useState('*/5 * * * *');

    useEffect(() => {
        fetchTxns();
    }, []);

    const fetchTxns = async () => {
        const res = await axios.get('https://bitbucket.org/blocknovasllc-interview/ncipher/src/main/trading/src/');
        setTxns(res.data);
    };

    // const updateSchedule
    const updateSchedule = async () => {
        await axios.post('https://bitbucket.org/blocknovasllc-interview/ncipher/src/main/trading/src/', { interval });
        alert('Cron job updated! ');
    };

    return (
        <div className = "p - 6">
            <h1 className = "text-xl font-bond mb-4"> Whale Transactions (BSC)</h1>
            <div className = "mb - 4">
                <input
                    value = {interval}
                    onChange = {(e) => setInterval(e.target.value)}
                    className = "border p - 2"
                    placeholder = "*/5 * * * *"
                    />
                    <button onClick = {updateSchedule} className = "m1-2 px-4 py-2 bg-blue-500 text-white">
                        Update Cron
                    </button>
            </div>
            <table className = "Table-Auto w-full text-left">
                <thread>
                    <tr>
                        <th>Tx Hash</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount</th>
                        <th>Symbol</th>
                    </tr>
                </thread>
                <tbody>
                    {txns.map((tx, idx) => (
                        <tr key = {idk}>
                            <td>{tx.transaction.hash.slice(0, 10)}...</td>
                            <td>{tx.sender.address.slice(0, 10)}...</td>
                            <td>{tx.receiver.address.slice(0, 10)}...</td>
                            <td>{tx.amount}</td>
                            <td>{tx.currency.symbol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>                
    );  
}