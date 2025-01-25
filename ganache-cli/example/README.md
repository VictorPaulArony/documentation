# `Code base implementation using ganache-cli`

---

## 1. Install Prerequisites
Ensure you have the following installed:
- **Node.js** (includes `npm`)
- **Ganache CLI** (for running a local Ethereum blockchain)
- **MetaMask** (browser extension)
- **Solidity Compiler (`solc`)**
- **Web3.js**

### Install Ganache CLI
```bash
npm install -g ganache-cli
```

### Install Solidity Compiler (`solc`)
```bash
npm install -g solc
```

---

## 2. Create and Compile the Solidity Contract
Save the following Solidity code in a file named `HelloWorld.sol`: As in the contract directory section...

### Compile the Contract
Use `solc` to compile the contract:

```bash
solc --optimize --combined-json abi,bin HelloWorld.sol > HelloWorld.json
```

This will generate an `abi` and `bytecode` in the `HelloWorld.json` file.

---

## 3. Start Ganache CLI
Start a local blockchain using Ganache CLI:
```bash
ganache-cli -p 8545 -h 127.0.0.1:7534
```
- Take note of the private keys and account addresses displayed in the console.

---

## 4. Deploy the Contract
Create a JavaScript file `deploy.js` to deploy the contract:


Run the script:
```bash
node deploy.js
```

Copy the contract address from the output.

---

## 5. Update the HTML File with the Contract Address
Replace the `contractAddress` variable in the HTML file with the deployed contract address.

---

## 6. Configure MetaMask
1. Install the MetaMask extension in your browser.
2. Add a custom network:
   - **Network Name**: Ganache
   - **RPC URL**: `http://127.0.0.1:8545`
   - **Chain ID**: `1337` (Ganache's default)
3. Import an account from the private key displayed in the Ganache CLI console.

---

## 7. Open the HTML File
Open the `index.html` file in your browser. If you're using a local file, you may need to serve it using a local web server:
```bash
npx http-server .
```

Access the file via `http://127.0.0.1:8080` (or the port displayed by the web server).

---

## 8. Interact with the Contract
1. **View the Current Message**: The page will load the initial greeting from the contract.
2. **Update the Message**:
   - Enter a new message in the input field.
   - Click the "Update Message" button.
3. The new message will be saved to the blockchain and displayed on the page.

---

## 9. Troubleshooting
- **EIP-1559 Error**: The contract interaction falls back to legacy gas pricing if `EIP-1559` is unsupported.
- **MetaMask Connection Issues**: Ensure MetaMask is connected to the correct Ganache network and using an account with funds.

