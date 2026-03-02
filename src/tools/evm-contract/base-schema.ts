import * as z from "zod";

/**
 * Actions available for EVM Contracts endpoints
 */
export const EvmContractAction = z.enum(["get-token-details-by-contract-address"]);

/**
 * Supported EVM blockchains for Contracts (Get Token Details)
 * Source: https://developers.cryptoapis.io
 */
export const EvmContractBlockchain = z.enum([
    "ethereum",
    "ethereum-classic",
    "binance-smart-chain",
]);

/**
 * Supported EVM networks for Contracts (Get Token Details)
 */
export const EvmContractNetwork = z.enum([
    "mainnet",
    "mordor",
    "testnet",
    "sepolia",
]);
