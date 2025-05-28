import { gql } from '@apollo/client';

export const GET_TASKS = gql`
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

export const GET_TASK = gql`
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

export const CREATE_TASK = gql`
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

export const UPDATE_TASK = gql`
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

export const REMOVE_TASK = gql`
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
