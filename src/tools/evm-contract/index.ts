import type { CryptoApisHttpClient, McpLogger, RequestResult } from "@cryptoapis-io/mcp-shared";
import type { McpToolDef } from "../types.js";
import { EvmContractToolSchema, type EvmContractInput } from "./schema.js";
import { handleGetTokenDetailsByContractAddress } from "./get-token-details-by-contract-address/index.js";
import { credits as getTokenDetailsByContractAddressCredits } from "./get-token-details-by-contract-address/credits.js";

const EVM_CONTRACTS_DESCRIPTION = `Get EVM contract token details (Contracts product).

Actions:
• get-token-details-by-contract-address: Get token details (name, symbol, standard, decimals, totalSupply) by contract address

Blockchain → Networks:
• ethereum: mainnet, sepolia
• ethereum-classic: mainnet, mordor
• binance-smart-chain: mainnet, testnet`;

export const evmContractTool: McpToolDef<typeof EvmContractToolSchema> = {
    name: "evm_contract_data",
    description: EVM_CONTRACTS_DESCRIPTION,
    credits: {
        "get-token-details-by-contract-address": getTokenDetailsByContractAddressCredits,
    },
    inputSchema: EvmContractToolSchema,
    handler:
        (client: CryptoApisHttpClient, logger: McpLogger) =>
        async (input: EvmContractInput) => {
            let result: RequestResult<unknown>;

            switch (input.action) {
                case "get-token-details-by-contract-address":
                    result = await handleGetTokenDetailsByContractAddress(client, {
                        blockchain: input.blockchain,
                        network: input.network,
                        contractAddress: input.contractAddress,
                        context: input.context,
                    });
                    break;
                default:
                    throw new Error(`Unknown action: ${(input as Record<string, unknown>).action}`);
            }

            logger.logInfo({
                tool: "evm_contract_data",
                action: input.action,
                blockchain: input.blockchain,
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

export { EvmContractToolSchema, type EvmContractInput } from "./schema.js";
