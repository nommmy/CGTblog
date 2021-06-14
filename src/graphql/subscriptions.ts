/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComic = /* GraphQL */ `
  subscription OnCreateComic {
    onCreateComic {
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
export const onUpdateComic = /* GraphQL */ `
  subscription OnUpdateComic {
    onUpdateComic {
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
export const onDeleteComic = /* GraphQL */ `
  subscription OnDeleteComic {
    onDeleteComic {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
