import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { SolanaContractNetwork } from "../base-schema.js";

/**
 * Get Token Details By Contract Address - attributes for this action
 */
export const GetTokenDetailsByContractAddressAttributesSchema = z
    .object({
        network: SolanaContractNetwork.describe("Network name: mainnet or devnet"),
        contractAddress: z.string().min(1).describe("Contract address (token contract)"),
    })
    .merge(RequestMetadataSchema);

export type GetTokenDetailsByContractAddressAttributes = z.infer<
    typeof GetTokenDetailsByContractAddressAttributesSchema
>;

/**
 * Get Token Details By Contract Address response (Contracts Solana)
 */
export const GetTokenDetailsByContractAddressOutputSchema = z.object({}).passthrough();

export type GetTokenDetailsByContractAddressOutput = z.infer<
    typeof GetTokenDetailsByContractAddressOutputSchema
>;
