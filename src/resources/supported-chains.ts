import type { SupportedChainsResource } from "@cryptoapis-io/mcp-shared";

/**
 * Supported blockchains, networks, and actions for the contracts package.
 */
export const supportedChains: SupportedChainsResource = {
    evm: {
        blockchains: ["ethereum", "ethereum-classic", "binance-smart-chain"],
        networks: {
            ethereum: ["mainnet", "sepolia"],
            "ethereum-classic": ["mainnet", "mordor"],
            "binance-smart-chain": ["mainnet", "testnet"],
        },
        actions: {
            "get-token-details-by-contract-address": [
                "ethereum",
                "ethereum-classic",
                "binance-smart-chain",
            ],
        },
    },
    solana: {
        blockchains: ["solana"],
        networks: {
            solana: ["mainnet", "devnet"],
        },
        actions: {
            "get-token-details-by-contract-address": ["solana"],
        },
    },
};
