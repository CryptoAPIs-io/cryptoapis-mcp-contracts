import * as z from "zod";

/**
 * Actions available for Solana Contracts endpoints
 */
export const SolanaContractAction = z.enum(["get-token-details-by-contract-address"]);

/**
 * Supported Solana networks for Contracts (Get Token Details)
 * Source: https://developers.cryptoapis.io
 */
export const SolanaContractNetwork = z.enum(["mainnet", "devnet"]);
