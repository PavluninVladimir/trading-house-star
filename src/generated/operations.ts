import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Bot = {
  __typename?: 'Bot';
  Name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  bots: Array<Bot>;
};

export type GetBotssQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBotssQuery = { __typename?: 'Query', bots: Array<{ __typename?: 'Bot', id: string, Name?: string | null }> };


export const GetBotssDocument = gql`
    query getBotss {
  bots {
    id
    Name
  }
}
    `;

/**
 * __useGetBotssQuery__
 *
 * To run a query within a Vue component, call `useGetBotssQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBotssQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetBotssQuery();
 */
export function useGetBotssQuery(options: VueApolloComposable.UseQueryOptions<GetBotssQuery, GetBotssQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetBotssQuery, GetBotssQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetBotssQuery, GetBotssQueryVariables>> = {}) {
  return useQuery<GetBotssQuery, GetBotssQueryVariables>(GetBotssDocument, {}, options);
}
export function useGetBotssLazyQuery(options: VueApolloComposable.UseQueryOptions<GetBotssQuery, GetBotssQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetBotssQuery, GetBotssQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetBotssQuery, GetBotssQueryVariables>> = {}) {
  return useLazyQuery<GetBotssQuery, GetBotssQueryVariables>(GetBotssDocument, {}, options);
}
export type GetBotssQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetBotssQuery, GetBotssQueryVariables>;