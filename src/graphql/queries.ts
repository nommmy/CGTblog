/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComic = /* GraphQL */ `
  query GetComic($id: ID!) {
    getComic(id: $id) {
      id
      code
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
      createdAt
      updatedAt
    }
  }
`;
export const listComics = /* GraphQL */ `
  query ListComics(
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const comicByCode = /* GraphQL */ `
  query ComicByCode(
    $code: String
    $sortDirection: ModelSortDirection
    $filter: ModelComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    comicByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
