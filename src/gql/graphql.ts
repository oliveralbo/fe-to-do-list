import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string };
};

export type CreateTaskInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  removeTask: Task;
  updateTask: Task;
};

export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};

export type MutationRemoveTaskArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
};

export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};

export type Task = {
  __typename?: 'Task';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateTaskInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTasksQuery = {
  __typename?: 'Query';
  tasks: Array<{
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetTaskQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetTaskQuery = {
  __typename?: 'Query';
  task: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type CreateTaskMutationVariables = Exact<{
  createTaskInput: CreateTaskInput;
}>;

export type CreateTaskMutation = {
  __typename?: 'Mutation';
  createTask: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type UpdateTaskMutationVariables = Exact<{
  updateTaskInput: UpdateTaskInput;
}>;

export type UpdateTaskMutation = {
  __typename?: 'Mutation';
  updateTask: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type RemoveTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type RemoveTaskMutation = {
  __typename?: 'Mutation';
  removeTask: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export const GetTasksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTasks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tasks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;
export const GetTaskDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTask' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'task' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTaskQuery, GetTaskQueryVariables>;
export const CreateTaskDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateTask' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'createTaskInput' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateTaskInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTask' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createTaskInput' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'createTaskInput' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateTask' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'updateTaskInput' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateTaskInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateTask' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateTaskInput' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'updateTaskInput' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const RemoveTaskDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveTask' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeTask' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveTaskMutation, RemoveTaskMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string };
};

export type CreateTaskInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  removeTask: Task;
  updateTask: Task;
};

export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};

export type MutationRemoveTaskArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
};

export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};

export type Task = {
  __typename?: 'Task';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateTaskInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetTasksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTasksQuery = {
  __typename?: 'Query';
  tasks: Array<{
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type GetTaskQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetTaskQuery = {
  __typename?: 'Query';
  task: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type CreateTaskMutationVariables = Exact<{
  createTaskInput: CreateTaskInput;
}>;

export type CreateTaskMutation = {
  __typename?: 'Mutation';
  createTask: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type UpdateTaskMutationVariables = Exact<{
  updateTaskInput: UpdateTaskInput;
}>;

export type UpdateTaskMutation = {
  __typename?: 'Mutation';
  updateTask: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type RemoveTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type RemoveTaskMutation = {
  __typename?: 'Mutation';
  removeTask: {
    __typename?: 'Task';
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export const GetTasksDocument = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksSuspenseQueryHookResult = ReturnType<typeof useGetTasksSuspenseQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
export const GetTaskDocument = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskQuery(
  baseOptions: Apollo.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables> &
    ({ variables: GetTaskQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export function useGetTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export function useGetTaskSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskSuspenseQueryHookResult = ReturnType<typeof useGetTaskSuspenseQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export const CreateTaskDocument = gql`
  mutation CreateTask($createTaskInput: CreateTaskInput!) {
    createTask(createTaskInput: $createTaskInput) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      createTaskInput: // value for 'createTaskInput'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options
  );
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(updateTaskInput: $updateTaskInput) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      updateTaskInput: // value for 'updateTaskInput'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options
  );
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const RemoveTaskDocument = gql`
  mutation RemoveTask($id: ID!) {
    removeTask(id: $id) {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
  }
`;
export type RemoveTaskMutationFn = Apollo.MutationFunction<
  RemoveTaskMutation,
  RemoveTaskMutationVariables
>;

/**
 * __useRemoveTaskMutation__
 *
 * To run a mutation, you first call `useRemoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskMutation, { data, loading, error }] = useRemoveTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveTaskMutation, RemoveTaskMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTaskMutation, RemoveTaskMutationVariables>(
    RemoveTaskDocument,
    options
  );
}
export type RemoveTaskMutationHookResult = ReturnType<typeof useRemoveTaskMutation>;
export type RemoveTaskMutationResult = Apollo.MutationResult<RemoveTaskMutation>;
export type RemoveTaskMutationOptions = Apollo.BaseMutationOptions<
  RemoveTaskMutation,
  RemoveTaskMutationVariables
>;
