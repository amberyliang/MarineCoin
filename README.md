# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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

