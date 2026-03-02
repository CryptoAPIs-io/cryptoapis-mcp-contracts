import type { CreditsPerBlockchain } from "@cryptoapis-io/mcp-shared";

/** Credits per blockchain (source: OpenAPI). Contracts EVM get token details by contract address. */
export const credits: CreditsPerBlockchain = {
    ethereum: 30,
    "ethereum-classic": 39,
    "binance-smart-chain": 75,
};
