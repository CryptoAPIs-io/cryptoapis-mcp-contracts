import type { CryptoApisHttpClient, McpLogger, RequestResult } from "@cryptoapis-io/mcp-shared";
import type { McpToolDef } from "../types.js";
import { SolanaContractToolSchema, type SolanaContractInput } from "./schema.js";
import { handleGetTokenDetailsByContractAddress } from "./get-token-details-by-contract-address/index.js";
import { credits as getTokenDetailsByContractAddressCredits } from "./get-token-details-by-contract-address/credits.js";

const SOLANA_CONTRACTS_DESCRIPTION = `Get Solana contract token details (Contracts product).

Actions:
• get-token-details-by-contract-address: Get token details by contract address

Networks: mainnet, devnet`;

export const solanaContractTool: McpToolDef<typeof SolanaContractToolSchema> = {
    name: "solana_contract_data",
    description: SOLANA_CONTRACTS_DESCRIPTION,
    credits: {
        "get-token-details-by-contract-address": getTokenDetailsByContractAddressCredits,
    },
    inputSchema: SolanaContractToolSchema,
    handler:
        (client: CryptoApisHttpClient, logger: McpLogger) =>
        async (input: SolanaContractInput) => {
            let result: RequestResult<unknown>;

            switch (input.action) {
                case "get-token-details-by-contract-address":
                    result = await handleGetTokenDetailsByContractAddress(client, {
                        network: input.network,
                        contractAddress: input.contractAddress,
                        context: input.context,
                    });
                    break;
                default:
                    throw new Error(`Unknown action: ${(input as Record<string, unknown>).action}`);
            }

            logger.logInfo({
                tool: "solana_contract_data",
                action: input.action,
                blockchain: "solana",
                network: input.network,
                creditsConsumed: result.creditsConsumed,
                creditsAvailable: result.creditsAvailable,
                responseTime: result.responseTime,
                throughputUsage: result.throughputUsage,
            });

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            ...(result.data as object),
                            creditsConsumed: result.creditsConsumed,
                            creditsAvailable: result.creditsAvailable,
                            responseTime: result.responseTime,
                            throughputUsage: result.throughputUsage,
                        }),
                    },
                ],
            };
        },
};

export { SolanaContractToolSchema, type SolanaContractInput } from "./schema.js";
