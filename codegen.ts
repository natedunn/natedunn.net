import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.PUBLIC_GRAPHQL_ENDPOINT,
  documents: ['src/lib/invokers/calls/**/*.ts'],
  emitLegacyCommonJSImports: false,
  generates: {
    'src/lib/codegen/_generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'urql-introspection',
        {
          'typescript-urql': {
            withHooks: false,
          },
        },
      ],
      config: {
        withRefetchFn: true,
        documentVariableSuffix: '',
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
        },
      },
    },
  },
};

export default config;
