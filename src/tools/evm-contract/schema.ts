import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { EvmContractAction, EvmContractBlockchain, EvmContractNetwork } from "./base-schema.js";
import { GetTokenDetailsByContractAddressOutputSchema } from "./get-token-details-by-contract-address/schema.js";

/**
 * Flat schema for EVM contract actions (single action: get-token-details-by-contract-address)
 */
export const EvmContractToolSchema = z
    .object({
        action: EvmContractAction.describe("Action to perform"),
        blockchain: EvmContractBlockchain.describe("Blockchain protocol"),
        network: EvmContractNetwork.describe("Network name"),
        contractAddress: z.string().min(1).describe("Contract address (token contract)"),
    })
    .merge(RequestMetadataSchema);

export type EvmContractInput = z.infer<typeof EvmContractToolSchema>;

// Re-export base schema
export { EvmContractAction, EvmContractBlockchain, EvmContractNetwork } from "./base-schema.js";

// Re-export output schemas
export { GetTokenDetailsByContractAddressOutputSchema } from "./get-token-details-by-contract-address/schema.js";
