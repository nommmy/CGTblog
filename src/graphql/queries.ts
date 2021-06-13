/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        createdAt
        updatedAt
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
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
      createdAt
      updatedAt
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
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
        createdAt
        updatedAt
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        code
        title
        genres
        subtitle
        like
        image
        isPublic
        content
        createdAt
        updatedAt
        comments {
          nextToken
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
        post {
          id
          code
          title
          genres
          subtitle
          like
          image
          isPublic
          content
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
