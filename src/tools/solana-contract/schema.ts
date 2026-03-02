import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { SolanaContractAction, SolanaContractNetwork } from "./base-schema.js";
import { GetTokenDetailsByContractAddressOutputSchema } from "./get-token-details-by-contract-address/schema.js";

/**
 * Flat schema for Solana contract actions (single action: get-token-details-by-contract-address)
 */
export const SolanaContractToolSchema = z
    .object({
        action: SolanaContractAction.describe("Action to perform"),
        network: SolanaContractNetwork.describe("Network name: mainnet or devnet"),
        contractAddress: z.string().min(1).describe("Contract address (token contract)"),
    })
    .merge(RequestMetadataSchema);

export type SolanaContractInput = z.infer<typeof SolanaContractToolSchema>;

// Re-export base schema
export { SolanaContractAction, SolanaContractNetwork } from "./base-schema.js";

// Re-export output schemas
export { GetTokenDetailsByContractAddressOutputSchema } from "./get-token-details-by-contract-address/schema.js";
