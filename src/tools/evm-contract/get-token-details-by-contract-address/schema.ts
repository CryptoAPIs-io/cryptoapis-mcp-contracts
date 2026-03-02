import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { EvmContractBlockchain, EvmContractNetwork } from "../base-schema.js";

/**
 * Get Token Details By Contract Address - attributes for this action
 */
export const GetTokenDetailsByContractAddressAttributesSchema = z
    .object({
        blockchain: EvmContractBlockchain.describe("Blockchain protocol"),
        network: EvmContractNetwork.describe("Network name"),
        contractAddress: z.string().min(1).describe("Contract address (token contract, not creator)"),
    })
    .merge(RequestMetadataSchema);

export type GetTokenDetailsByContractAddressAttributes = z.infer<
    typeof GetTokenDetailsByContractAddressAttributesSchema
>;

/**
 * Get Token Details By Contract Address response (Contracts EVM)
 */
export const GetTokenDetailsByContractAddressOutputSchema = z.object({}).passthrough();

export type GetTokenDetailsByContractAddressOutput = z.infer<
    typeof GetTokenDetailsByContractAddressOutputSchema
>;
