import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
dotenv.config();

const config: CodegenConfig = {
  schema: `${process.env.VITE_BACKEND_URL}/graphql/`,
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
