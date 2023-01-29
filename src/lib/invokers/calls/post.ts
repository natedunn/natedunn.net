import { fetcher } from '@fetcher';
import type { PageQueryOptions, PostQuery, PostQueryVariables, PostsQuery } from '@codegen';
import { gql } from '@urql/core';

// Query method
const getPost = async (variables?: PostQueryVariables) => {
  const { data } = await fetcher.gql<PostQuery>(
    gql`
      query Post($id: ID!) {
        post(id: $id) {
          title
          body
          id
        }
      }
    `,
    variables
  );
  return data?.post || {};
};

// Add methods to exported object
export default {
  query({ id }: PostQueryVariables) {
    return getPost({ id });
  },
};
