# @cryptoapis-io/mcp-contracts

MCP server for [Crypto APIs](https://cryptoapis.io/) Contracts product. Get token details by contract address for EVM and Solana.

> **API Version:** Compatible with Crypto APIs version **2024-12-12**

## Features

- **EVM contracts:** Get token details by contract address (blockchain, network, contractAddress)
- **Solana contracts:** Get token details by contract address (network, contractAddress)


## Prerequisites

1. [Register at Crypto APIs](https://app.cryptoapis.io/signup)
2. [Generate an API key](https://app.cryptoapis.io/api-keys)

## Installation

```bash
npm install @cryptoapis-io/mcp-contracts
```

Or install all Crypto APIs MCP servers: `npm install @cryptoapis-io/mcp`

## Usage

```bash
# Run with API key
npx @cryptoapis-io/mcp-contracts --api-key YOUR_API_KEY

# Or use environment variable
export CRYPTOAPIS_API_KEY=YOUR_API_KEY
npx @cryptoapis-io/mcp-contracts

# HTTP transport
npx @cryptoapis-io/mcp-contracts --transport http --port 3000 --api-key YOUR_API_KEY
```

### Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS, `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

```json
{
  "mcpServers": {
    "cryptoapis-contracts": {
      "command": "npx",
      "args": ["-y", "@cryptoapis-io/mcp-contracts"],
      "env": {
        "CRYPTOAPIS_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):

```json
{
  "mcpServers": {
    "cryptoapis-contracts": {
      "command": "npx",
      "args": ["-y", "@cryptoapis-io/mcp-contracts"],
      "env": {
        "CRYPTOAPIS_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### MCP Inspector

```bash
npx @modelcontextprotocol/inspector npx @cryptoapis-io/mcp-contracts --api-key YOUR_API_KEY
```

### n8n

1. Start the server in HTTP mode:
   ```bash
   npx @cryptoapis-io/mcp-contracts --transport http --port 3000 --api-key YOUR_API_KEY
   ```
2. In your n8n workflow, add an **AI Agent** node
3. Under **Tools**, add an **MCP Client Tool** and set the URL to `http://localhost:3000/mcp`

> All servers default to port 3000. Use `--port` to assign different ports when running multiple servers.

## Available Tools

### `evm_contract_data`

Get token details by contract address.

| Action | Description |
|--------|-------------|
| `get-token-details-by-contract-address` | Get token details (name, symbol, standard, decimals, totalSupply) by contract address |

**Supported Blockchains:** ethereum, ethereum-classic, binance-smart-chain (mainnet, mordor, testnet, sepolia)

> Contract token details are currently available for Ethereum, Ethereum Classic, and BSC only.

### `solana_contract_data`

Get Solana token details by contract address.

| Action | Description |
|--------|-------------|
| `get-token-details-by-contract-address` | Get token details by contract address |

**Supported Networks:** mainnet, devnet

## CLI Arguments

| Argument | Description | Default |
|----------|-------------|---------|
| `--api-key` | Crypto APIs API key | `CRYPTOAPIS_API_KEY` env var |
| `--transport` | Transport type: `stdio` or `http` | `stdio` |
| `--host` | HTTP host | `0.0.0.0` |
| `--port` | HTTP port | `3000` |
| `--path` | HTTP path | `/mcp` |
| `--stateless` | Enable stateless HTTP mode | `false` |

### HTTP API Key Modes

When using HTTP transport, the server supports two API key modes:

- **With `--api-key`:** The key is used for all requests. `x-api-key` request headers are ignored.
- **Without `--api-key`:** Each request must include an `x-api-key` header with a valid Crypto APIs key. This enables hosting a public server where each user provides their own key.

```bash
# Per-request key mode (multi-tenant)
npx @cryptoapis-io/mcp-contracts --transport http --port 3000
# Clients send x-api-key header with each request
```

> Stdio transport always requires an API key at startup.

## Important: API Key Required

> **Warning:** Making requests without a valid API key — or with an incorrect one — may result in your IP being banned from the Crypto APIs ecosystem. Always ensure a valid API key is configured before starting any server.

## Remote MCP Server

Crypto APIs provides an official remote MCP server with all tools available via HTTP Streamable transport at [https://ai.cryptoapis.io/mcp](https://ai.cryptoapis.io/mcp). Pass your API key via the `x-api-key` header — no installation required.

## License

MIT

