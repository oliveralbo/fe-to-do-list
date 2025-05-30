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
  'query GetTasks {\n  tasks {\n    ...Task\n  }\n}\n\nquery GetTaskById($id: ID!) {\n  task(id: $id) {\n    ...Task\n  }\n}\n\nfragment Task on Task {\n  id\n  title\n  completed\n  description\n  createdAt\n}': typeof types.GetTasksDocument;
  'mutation CompleteTask($taskId: ID!, $status: Boolean) {\n  updateTask(updateTaskInput: {id: $taskId, completed: $status}) {\n    ...Task\n  }\n}\n\nmutation EditTask($taskId: ID!, $title: String, $description: String) {\n  updateTask(\n    updateTaskInput: {id: $taskId, title: $title, description: $description}\n  ) {\n    ...Task\n  }\n}\n\nmutation RemoveTask($taskId: ID!) {\n  removeTask(id: $taskId) {\n    ...Task\n  }\n}': typeof types.CompleteTaskDocument;
};
const documents: Documents = {
  'query GetTasks {\n  tasks {\n    ...Task\n  }\n}\n\nquery GetTaskById($id: ID!) {\n  task(id: $id) {\n    ...Task\n  }\n}\n\nfragment Task on Task {\n  id\n  title\n  completed\n  description\n  createdAt\n}':
    types.GetTasksDocument,
  'mutation CompleteTask($taskId: ID!, $status: Boolean) {\n  updateTask(updateTaskInput: {id: $taskId, completed: $status}) {\n    ...Task\n  }\n}\n\nmutation EditTask($taskId: ID!, $title: String, $description: String) {\n  updateTask(\n    updateTaskInput: {id: $taskId, title: $title, description: $description}\n  ) {\n    ...Task\n  }\n}\n\nmutation RemoveTask($taskId: ID!) {\n  removeTask(id: $taskId) {\n    ...Task\n  }\n}':
    types.CompleteTaskDocument,
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
  source: 'query GetTasks {\n  tasks {\n    ...Task\n  }\n}\n\nquery GetTaskById($id: ID!) {\n  task(id: $id) {\n    ...Task\n  }\n}\n\nfragment Task on Task {\n  id\n  title\n  completed\n  description\n  createdAt\n}'
): (typeof documents)['query GetTasks {\n  tasks {\n    ...Task\n  }\n}\n\nquery GetTaskById($id: ID!) {\n  task(id: $id) {\n    ...Task\n  }\n}\n\nfragment Task on Task {\n  id\n  title\n  completed\n  description\n  createdAt\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CompleteTask($taskId: ID!, $status: Boolean) {\n  updateTask(updateTaskInput: {id: $taskId, completed: $status}) {\n    ...Task\n  }\n}\n\nmutation EditTask($taskId: ID!, $title: String, $description: String) {\n  updateTask(\n    updateTaskInput: {id: $taskId, title: $title, description: $description}\n  ) {\n    ...Task\n  }\n}\n\nmutation RemoveTask($taskId: ID!) {\n  removeTask(id: $taskId) {\n    ...Task\n  }\n}'
): (typeof documents)['mutation CompleteTask($taskId: ID!, $status: Boolean) {\n  updateTask(updateTaskInput: {id: $taskId, completed: $status}) {\n    ...Task\n  }\n}\n\nmutation EditTask($taskId: ID!, $title: String, $description: String) {\n  updateTask(\n    updateTaskInput: {id: $taskId, title: $title, description: $description}\n  ) {\n    ...Task\n  }\n}\n\nmutation RemoveTask($taskId: ID!) {\n  removeTask(id: $taskId) {\n    ...Task\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
