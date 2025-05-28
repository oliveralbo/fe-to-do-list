/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  query GetTasks {\n    tasks {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n': typeof types.GetTasksDocument;
  '\n  query GetTask($id: ID!) {\n    task(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n': typeof types.GetTaskDocument;
  '\n  mutation CreateTask($createTaskInput: CreateTaskInput!) {\n    createTask(createTaskInput: $createTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n': typeof types.CreateTaskDocument;
  '\n  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n    updateTask(updateTaskInput: $updateTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n': typeof types.UpdateTaskDocument;
  '\n  mutation RemoveTask($id: ID!) {\n    removeTask(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n': typeof types.RemoveTaskDocument;
};
const documents: Documents = {
  '\n  query GetTasks {\n    tasks {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n':
    types.GetTasksDocument,
  '\n  query GetTask($id: ID!) {\n    task(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n':
    types.GetTaskDocument,
  '\n  mutation CreateTask($createTaskInput: CreateTaskInput!) {\n    createTask(createTaskInput: $createTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n':
    types.CreateTaskDocument,
  '\n  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n    updateTask(updateTaskInput: $updateTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n':
    types.UpdateTaskDocument,
  '\n  mutation RemoveTask($id: ID!) {\n    removeTask(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n':
    types.RemoveTaskDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetTasks {\n    tasks {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'
): (typeof documents)['\n  query GetTasks {\n    tasks {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetTask($id: ID!) {\n    task(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'
): (typeof documents)['\n  query GetTask($id: ID!) {\n    task(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateTask($createTaskInput: CreateTaskInput!) {\n    createTask(createTaskInput: $createTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'
): (typeof documents)['\n  mutation CreateTask($createTaskInput: CreateTaskInput!) {\n    createTask(createTaskInput: $createTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n    updateTask(updateTaskInput: $updateTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'
): (typeof documents)['\n  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n    updateTask(updateTaskInput: $updateTaskInput) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveTask($id: ID!) {\n    removeTask(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'
): (typeof documents)['\n  mutation RemoveTask($id: ID!) {\n    removeTask(id: $id) {\n      id\n      title\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
