# DeFi Wallet Project

This is a test project demonstrating a DeFi wallet implementation. **This project is for educational purposes only and should not be used in production without implementing proper security measures.**

## ⚠️ Security Notice

This project currently contains several security vulnerabilities that must be addressed before any production use:

1. **Private Key Storage**
   - Currently uses hardcoded encryption keys
   - Implements basic AES-256-CBC encryption
   - No key derivation or salting

2. **Required Security Improvements**
   - Implement PBKDF2 or Argon2 for key derivation
   - Use hardware security modules for key storage
   - Add multi-factor authentication
   - Implement proper session management
   - Add rate limiting for sensitive operations
   - Use secure environment variables for all secrets
   - Implement proper key rotation mechanisms

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
4. Set up your database
5. Start the development server:
   ```bash
   npm run dev
   ```

## 🔒 Security Best Practices

Before deploying to production:

1. Generate secure encryption keys:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. Use environment variables for all sensitive data
3. Implement proper key derivation
4. Add rate limiting
5. Set up proper authentication
6. Use HTTPS
7. Implement proper error handling
8. Add logging and monitoring

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This is a test project and should not be used in production without implementing proper security measures. The current implementation is not secure and should only be used for educational purposes.
```
npm install 
```
## How to Run

```
npm run dev 
```