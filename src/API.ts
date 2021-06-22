/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateComicInput = {
  id?: string | null,
  code: string,
  title: string,
  genres: Array< Genre >,
  subtitle: string,
  like: number,
  image: string,
  isPublic: boolean,
  content: string,
  isHot: boolean,
  relation?: Array< string > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum Genre {
  battle = "battle",
  love = "love",
  aoharu = "aoharu",
  sports = "sports",
  drama = "drama",
  music = "music",
  food = "food",
  gag = "gag",
  tears = "tears",
}


export type ModelComicConditionInput = {
  code?: ModelStringInput | null,
  title?: ModelStringInput | null,
  genres?: ModelGenreListInput | null,
  subtitle?: ModelStringInput | null,
  like?: ModelIntInput | null,
  image?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  content?: ModelStringInput | null,
  isHot?: ModelBooleanInput | null,
  relation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelComicConditionInput | null > | null,
  or?: Array< ModelComicConditionInput | null > | null,
  not?: ModelComicConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelGenreListInput = {
  eq?: Array< Genre | null > | null,
  ne?: Array< Genre | null > | null,
  contains?: Genre | null,
  notContains?: Genre | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Comic = {
  __typename: "Comic",
  id?: string,
  code?: string,
  title?: string,
  genres?: Array< Genre >,
  subtitle?: string,
  like?: number,
  image?: string,
  isPublic?: boolean,
  content?: string,
  isHot?: boolean,
  relation?: Array< string > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateComicInput = {
  id: string,
  code?: string | null,
  title?: string | null,
  genres?: Array< Genre > | null,
  subtitle?: string | null,
  like?: number | null,
  image?: string | null,
  isPublic?: boolean | null,
  content?: string | null,
  isHot?: boolean | null,
  relation?: Array< string > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteComicInput = {
  id?: string | null,
};

export type ModelComicFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  title?: ModelStringInput | null,
  genres?: ModelGenreListInput | null,
  subtitle?: ModelStringInput | null,
  like?: ModelIntInput | null,
  image?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  content?: ModelStringInput | null,
  isHot?: ModelBooleanInput | null,
  relation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelComicFilterInput | null > | null,
  or?: Array< ModelComicFilterInput | null > | null,
  not?: ModelComicFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelComicConnection = {
  __typename: "ModelComicConnection",
  items?:  Array<Comic | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateComicMutationVariables = {
  input?: CreateComicInput,
  condition?: ModelComicConditionInput | null,
};

export type CreateComicMutation = {
  createComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateComicMutationVariables = {
  input?: UpdateComicInput,
  condition?: ModelComicConditionInput | null,
};

export type UpdateComicMutation = {
  updateComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteComicMutationVariables = {
  input?: DeleteComicInput,
  condition?: ModelComicConditionInput | null,
};

export type DeleteComicMutation = {
  deleteComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetComicQueryVariables = {
  id?: string,
};

export type GetComicQuery = {
  getComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListComicsQueryVariables = {
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComicsQuery = {
  listComics?:  {
    __typename: "ModelComicConnection",
    items?:  Array< {
      __typename: "Comic",
      id: string,
      code: string,
      title: string,
      genres: Array< Genre >,
      subtitle: string,
      like: number,
      image: string,
      isPublic: boolean,
      content: string,
      isHot: boolean,
      relation?: Array< string > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ComicByCodeQueryVariables = {
  code?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ComicByCodeQuery = {
  comicByCode?:  {
    __typename: "ModelComicConnection",
    items?:  Array< {
      __typename: "Comic",
      id: string,
      code: string,
      title: string,
      genres: Array< Genre >,
      subtitle: string,
      like: number,
      image: string,
      isPublic: boolean,
      content: string,
      isHot: boolean,
      relation?: Array< string > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateComicSubscription = {
  onCreateComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateComicSubscription = {
  onUpdateComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteComicSubscription = {
  onDeleteComic?:  {
    __typename: "Comic",
    id: string,
    code: string,
    title: string,
    genres: Array< Genre >,
    subtitle: string,
    like: number,
    image: string,
    isPublic: boolean,
    content: string,
    isHot: boolean,
    relation?: Array< string > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
