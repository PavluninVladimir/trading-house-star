import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:8080/query',
    // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
    documents: ['src/**/*.{vue,graphql}'],
    generates: {
        './src/generated/schema.d.ts': {
            plugins: ['typescript']
        },
        './src/generated/operations.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
            config: {
                addTypename: true,
                withCompositionFunctions: true,
                vueCompositionApiImportFrom: 'vue',
                documentNode: 'documentNode'
            },
        }
    },
};

export default config;