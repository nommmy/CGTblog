/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($code: String!) {
    getComic(code: $code) {
      id
      code
      owner
      title
      genres
      subtitle
      like
      image
      isPublic
      content
      isHot
      relation
      tags
      author
      volume
      magazine
      createdAt
      updatedAt
    }
  }
`;
export const listComics = /* GraphQL */ `
  query ListComics(
    $code: String
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComics(
      code: $code
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        code
        owner
        title
        genres
        subtitle
        like
        image
        isPublic
        content
        isHot
        relation
        tags
        author
        volume
        magazine
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listComicsSortedByUpdatedAt = /* GraphQL */ `
  query ListComicsSortedByUpdatedAt(
    $owner: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComicsSortedByUpdatedAt(
      owner: $owner
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        owner
        title
        genres
        subtitle
        like
        image
        isPublic
        content
        isHot
        relation
        tags
        author
        volume
        magazine
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listComicsSortedByCreatedAt = /* GraphQL */ `
  query ListComicsSortedByCreatedAt(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComicsSortedByCreatedAt(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        owner
        title
        genres
        subtitle
        like
        image
        isPublic
        content
        isHot
        relation
        tags
        author
        volume
        magazine
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
