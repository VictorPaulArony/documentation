
# Install the Web3 Library

Make sure you’ve installed the `web3` library in your project directory. Run the following command:
```bash
npm install web3
```

---

## 1. **Check the Import Syntax**
Depending on the version of `web3` you’re using, the import method may vary.

If you're using a CommonJS environment (e.g., Node.js without ES modules), the correct syntax is:
```javascript
const Web3 = require('web3');
```

If you're using ES modules (e.g., `"type": "module"` in your `package.json`), use:
```javascript
import Web3 from 'web3';
```

Since your error indicates `Web3` is not recognized as a constructor, ensure that you’re using the correct syntax based on your Node.js environment.

---

## 2. **Verify Web3 Installation**
To ensure `web3` is properly installed, check your `package.json` or run:
```bash
npm list web3
```

The output should show the installed version of `web3`. If it's not installed, re-install it:
```bash
npm install web3
```

---

## 3. **Check Node.js Version**
Web3.js may require a modern version of Node.js (16 or later). Since you’re using Node.js v22.13.1, this should not be a problem, but verify that the `web3` version supports this Node.js version.

---

## 4. **Run the Script**
After making the changes, try running the script again:
```bash
node deploy.js
```

---

