/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComic = /* GraphQL */ `
  mutation CreateComic(
    $input: CreateComicInput!
    $condition: ModelComicConditionInput
  ) {
    createComic(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateComic = /* GraphQL */ `
  mutation UpdateComic(
    $input: UpdateComicInput!
    $condition: ModelComicConditionInput
  ) {
    updateComic(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteComic = /* GraphQL */ `
  mutation DeleteComic(
    $input: DeleteComicInput!
    $condition: ModelComicConditionInput
  ) {
    deleteComic(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
