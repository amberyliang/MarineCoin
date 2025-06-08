# 🌊 MarineCoin

MarineCoin is an ERC-1155-based NFT token developed to incentivize and track marine waste cleanup efforts using blockchain technology. This project demonstrates how to create, mint, and view balances of NFTs using a smart contract deployed with Remix, and a frontend application built with React and Ethers.js.

---

## 🧾 Smart Contract: `MarineCoin.sol`

### 🔧 Features

* **ERC1155 Standard**: Allows batch minting and supports semi-fungible tokens.
* **Ownable**: Only the contract owner can mint tokens.
* **Minting Functions**:

  * `mint(address account, uint256 id, uint256 amount, bytes memory data)`
  * `mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)`
* **URI Metadata**:

  * Metadata for tokens is served via a `setURI(string)` function.
  * Metadata is hosted on GitHub using raw URLs.

### 🔐 Access Control

* Only the contract owner (defined at deployment) can mint tokens or update the URI.
* Includes pause/unpause functions to temporarily disable transfers.

---

## 💻 React Frontend: Token Balance Checker

A simple React app that allows users to:

* Connect their MetaMask wallet.
* Input a Token ID.
* Query the balance of MarineCoin (ERC-1155 token) they hold for the given ID.

### 🔍 Technologies Used

* React.js (Frontend UI)
* Ethers.js (Interaction with Ethereum provider)
* MetaMask (Wallet connection)

### 📂 Project Structure

```
marine-coin-checker/
├── public/
├── src/
│   └── App.js
└── package.json
```

---

## 📦 Metadata Format (Hosted on GitHub)

Each token's metadata should follow the ERC1155 metadata JSON schema:

```json
{
  "name": "Marine Coin",
  "description": "A token awarded for marine cleanup contributions.",
  "image": "https://raw.githubusercontent.com/amberyliang/MarineCoin/main/marine_coine_icon.png"
}
```

You can access this metadata via:

```
https://raw.githubusercontent.com/amberyliang/MarineCoin/main/{id}.json
```

Example for token ID `0x00...00`:

```
https://raw.githubusercontent.com/amberyliang/MarineCoin/main/0x0000000000000000000000000000000000000000000000000000000000000000.json
```

---

## 🚀 How to Use

### 1. Deploy Smart Contract (Remix)

* Connect Remix to Ganache or Injected Web3.
* Compile `MarineCoin.sol`
* Deploy contract with your address as the owner.
* Call `mint()` to issue MarineCoin to desired addresses.
* Set metadata URI using `setURI()`.

### 2. Run React App

```bash
npm install
npm start
```

* Open [http://localhost:3000](http://localhost:3000)
* Connect MetaMask.
* Enter a token ID and click “查詢 MarineCoin 數量”.
* You will see your MarineCoin balance.

---

## 📚 Future Improvements

* Add NFT metadata viewer (name, image, description).
* Implement claim functionality (public mint).
* Integrate IPFS for decentralized metadata storage.
* Add record logs for cleanup activity.

---

## ✨ Author

**Ambery Liang**
Passionate about blockchain for sustainability and environmental impact.
