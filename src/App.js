import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const CONTRACT_ADDRESS = "0x9B3E2229F12410BE0eD96B7998e339fC6454141d";
const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [tokenId, setTokenId] = useState("0");

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAddress(accounts[0]);
      } else {
        alert("請先安裝 MetaMask");
      }
    };
    init();
  }, []);

  const fetchBalance = async () => {
    if (!address) return;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const result = await contract.balanceOf(address, tokenId);
      setBalance(result.toString());
    } catch (err) {
      console.error("❌ Error fetching balance:", err);
      alert("查詢失敗，請確認合約地址、ABI 與錢包是否連線正確");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">🌊 MarineCoin 持有查詢</h1>
        <p className="wallet">目前錢包地址：<span>{address}</span></p>
        <div className="input-group">
          <input
            type="number"
            placeholder="請輸入 Token ID"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
          />
          <button onClick={fetchBalance}>查詢 MarineCoin 數量</button>
        </div>
        {balance !== null && (
          <p className="result">你目前持有：<strong>{balance}</strong> 枚 MarineCoin（Token ID {tokenId}）</p>
        )}
      </div>
    </div>
  );
}

export default App;
