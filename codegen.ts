import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        skipTypename: false,
        dedupeFragments: true,
        exportFragmentSpreadSubTypes: true,
        preResolveTypes: true,
        scalars: {
          DateTime: 'string',
        },
      },
    },
  },
};

export default config;
