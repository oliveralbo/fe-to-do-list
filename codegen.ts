import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '/graphql',
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        scalars: {
          DateTime: 'string',
        },
      },
    },
  },
};

export default config;
