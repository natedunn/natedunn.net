import { AnyVariables, createClient, defaultExchanges, OperationResult } from '@urql/core';
import type { DocumentNode } from 'graphql';

export const urqlClient = createClient({
  url: import.meta.env.PUBLIC_GRAPHQL_ENDPOINT ?? '',
  exchanges: defaultExchanges,
});

export const fetchGQL = async <T>(
  QUERY: DocumentNode,
  vars: AnyVariables
): Promise<OperationResult<T, AnyVariables>> => {
  return await urqlClient.query<T>(QUERY, vars).toPromise();
};
