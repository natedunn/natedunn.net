import { fetcher } from '@fetcher';
import type { PageQueryOptions, PostsQuery, PostsQueryVariables } from '@codegen';
import { gql } from '@urql/core';

// Query method
const getPosts = async (variables?: PostsQueryVariables) => {
  const { data } = await fetcher.gql<PostsQuery>(
    gql`
      query Posts($options: PageQueryOptions) {
        posts(options: $options) {
          data {
            title
            body
            id
          }
          links {
            prev {
              page
            }
            next {
              page
            }
          }
        }
      }
    `,
    variables
  );
  return data;
};

// Add methods to exported object
export default {
  query(variables?: PostsQueryVariables) {
    return getPosts(variables);
  },
  mutate({ message }: { message: string }) {
    return {
      response: 'ok',
      message: message,
    };
  },
};
