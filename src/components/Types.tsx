import { Dispatch } from 'react';

export enum Views {
  PHOTOS = 'photos',
  TAGS = 'tags',
}

export enum Modals {
  TAG_CREATE = 'tag_create',
  PHOTO_ITEM_SELECT_TAG = 'select_tag',
}

export enum ApiEndpoints {
  GET_INITIAL_STATE = 'getInitialState',
  DELETE_TAG = 'deleteTag',
  ADD_TAG = 'addTag',
  UPLOAD_PHOTO = 'uploadPhoto',
  SKIP_PHOTO = 'skipPhoto',
}

export interface InitialState {
  photos: PhotoItem[];
  tags: TagItem[];
  loading: boolean;
}

export interface PropsTagsList {
  tags: TagItem[];
  setPopout: Dispatch<any>;
  saveInitialState: Dispatch<InitialState>;
}

export interface PropsDeleteTagPopout {
  setPopout: Dispatch<any>;

  saveInitialState: Dispatch<InitialState>;
  tag: TagItem;

}

export interface PropsPhotosList {
  photos: PhotoItem[];
  selectTag: (photoItem: PhotoItem) => void;
  skipPhoto: (photoItem: PhotoItem) => void;
}

export interface PropsTabBar {
  photosListCounter: number;
  activeStory: Views;
  onStoryChange: (e: any) => void;
}

export interface PropsFormTag {
  tag: TagItem;
  saveTag: () => void;
  onChangeTag: (e: any) => void;
}

export interface PropsSelectTag {
  savePhotoItem: () => void;
  onSelectTag: (e: any) => void;
  tags: TagItem[];
}

export interface TagItem {
  id: number;
  title: string;
  folder: string;
}

export interface PhotoItem {
  id: number;
  url: string;
  uploaded_chat_date: string;
  uploaded_chat_author: string;
  uploaded_yandex_disk_date: string;
  uploaded_yandex_disk_author: string;
  tag_id: number;
  chat_id: string;
}

declare const window: Window &
  typeof globalThis & {
  Telegram: any
};

export const Telegram = window.Telegram;
