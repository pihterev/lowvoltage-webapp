import { Dispatch } from 'react';

export enum Views {
  PHOTOS = 'photos',
  TAGS = 'tags',
}

export enum Modals {
  TAG_EDIT = 'tag_edit',
}

export enum ApiEndpoints {
  GET_INITIAL_STATE = 'getInitialState',
  DELETE_TAG = 'deleteTag',
}

export interface InitialState {
  photos: PhotoItem[];
  tags: TagItem[];
  loading: boolean;
}

export interface PropsTagsList {
  tags: TagItem[];
  setPopout: Dispatch<any>;
  onChangeTag: (e: any) => void;
  saveInitialState: Dispatch<InitialState>;
}

export interface PropsDeleteTagPopout {
  setPopout: Dispatch<any>;

  saveInitialState: Dispatch<InitialState>;
  tag: TagItem;

}

export interface PropsPhotosList {
  photos: PhotoItem[];
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
