# Ganache CLI
---

**Hello guys 📢📢**
for those who are still struggling with how to connect the smart contract to the front end🥶, here is a simple example for you.😌
In addition to that also those who like to work offline here is your chance to do so🤗
Happy coding sessions😊👨‍💻👩‍💻🎉

---

### **1. Install Ganache CLI**
If you don’t have Ganache CLI installed, you can install it globally using **npm**:

```bash
npm install -g ganache-cli
```

---

### **2. Verify Installation**
Check if Ganache CLI is installed by running:

```bash
ganache-cli --version
```

You should see the installed version. If it doesn't work, ensure **npm**'s global bin folder is in your system's PATH.

---

### **3. Start Ganache CLI**
Start Ganache CLI to simulate a local Ethereum blockchain:

```bash
ganache-cli
```

This will run Ganache on `http://127.0.0.1:8545` (default RPC URL) with 10 accounts pre-funded with 100 ETH each.

---

### **4. Customize Ganache CLI**
You can customize Ganache CLI by using flags. For example:

- **Specify Port** (e.g., `7545` for Truffle):
  ```bash
  ganache-cli --port 7545
  ```

- **Set a Custom Chain ID** (e.g., `1337`):
  ```bash
  ganache-cli --chainId 1337
  ```

- **Set a Custom Block Gas Limit**:
  ```bash
  ganache-cli --gasLimit 8000000
  ```

- **Seed the Blockchain with a Fixed Mnemonic**:
  ```bash
  ganache-cli --mnemonic "your custom mnemonic phrase"
  ```

For a full list of options, run:

```bash
ganache-cli --help
```

---

### **5. Test Connection**
Once Ganache CLI is running, test the connection using `curl`:

```bash
curl http://127.0.0.1:8545
```

You should see a JSON response confirming the blockchain is live.

---

### **6. Use with Truffle**
Update the `truffle-config.js` file to point to Ganache:

```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545,        // Ganache CLI port
      network_id: "*",   // Any network
    },
  },
};
```

Then deploy your contracts:

```bash
truffle migrate --reset
```

---

