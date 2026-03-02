import { systemInfoTool } from "@cryptoapis-io/mcp-shared";
import { evmContractTool } from "./evm-contract/index.js";
import { solanaContractTool } from "./solana-contract/index.js";

export const tools = [evmContractTool, solanaContractTool, systemInfoTool] as const;
