import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GetPromptResult } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { formatSupportedChains } from "@cryptoapis-io/mcp-shared";
import { supportedChains } from "../resources/supported-chains.js";

export function registerPrompts(server: McpServer): void {
    server.registerPrompt(
        "read-contract",
        {
            description: "Read data from a deployed smart contract",
            argsSchema: {
                blockchain: z.string().describe("Blockchain to query (e.g. ethereum, binance-smart-chain, solana)"),
                network: z.string().describe("Network to query (e.g. mainnet, sepolia, devnet)"),
                contractAddress: z.string().describe("The deployed contract address to inspect"),
            },
        },
        (args): GetPromptResult => ({
            messages: [
                {
                    role: "user",
                    content: {
                        type: "text",
                        text: `Use evm_contract_data or solana_contract_data (depending on the blockchain family) to read data from the smart contract at ${args.contractAddress} on ${args.blockchain}/${args.network}. Start by fetching the contract ABI if available, then help the user understand the contract's functions and state. For EVM contracts, you can call read-only functions to inspect on-chain state.\n\n${formatSupportedChains(supportedChains)}`,
                    },
                },
            ],
        }),
    );
}
