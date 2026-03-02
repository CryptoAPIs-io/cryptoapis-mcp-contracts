import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import {
    getTokenDetailsByContractAddress,
    type GetTokenDetailsByContractAddressInput,
} from "../../../api/evm-contract/get-token-details-by-contract-address/index.js";

export async function handleGetTokenDetailsByContractAddress(
    client: CryptoApisHttpClient,
    input: GetTokenDetailsByContractAddressInput
) {
    return getTokenDetailsByContractAddress(client, input);
}
