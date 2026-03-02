import type { CryptoApisHttpClient, RequestMetadata } from "@cryptoapis-io/mcp-shared";
import type { GetTokenDetailsByContractAddressRequest } from "./types.js";

export type GetTokenDetailsByContractAddressInput = GetTokenDetailsByContractAddressRequest & RequestMetadata;

export async function getTokenDetailsByContractAddress(
    client: CryptoApisHttpClient,
    input: GetTokenDetailsByContractAddressInput
) {
    const path = `/contracts/solana/${input.network}/${input.contractAddress}/token-details`;

    return client.request<unknown>("GET", path, {
        query: { context: input.context },
    });
}
