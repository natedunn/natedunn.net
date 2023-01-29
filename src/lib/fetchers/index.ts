import { fetchGQL } from './graphql';
import { fetchREST } from './rest';

export const fetcher = {
  gql: fetchGQL,
  rest: fetchREST,
};
