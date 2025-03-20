# DeFi Wallet Project

A DeFi wallet implementation with support for multiple networks including Polygon and BSC.

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

## 🌐 Supported Networks

- Polygon Mainnet
- Polygon Testnet
- BSC Mainnet
- BSC Testnet

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- MySQL Database
- Firebase Account (for authentication)

### Environment Variables
Required environment variables are listed in `.env.example`. Make sure to set up:
- Database credentials
- Security keys
- JWT secret
- Email configuration
- Firebase configuration
- API keys

## 🚀 Deployment

The project can be deployed on Render.com using the provided `render.yaml` configuration:

1. Push your code to GitHub
2. Create a new account on [Render.com](https://render.com)
3. Click "New +" and select "Blueprint"
4. Connect your GitHub repository
5. Configure environment variables in Render dashboard
6. Deploy both frontend and backend services

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
```
npm install 
```
## How to Run

```
npm run dev 
```