import {Dispatch} from 'react';

export enum Views {
  PHOTOS = 'photos',
  TAGS = 'tags',
  ALERTS = 'alerts',
  PROBLEMS = 'problems',
}

export enum Modals {
  TAG_CREATE = 'tag_create',
  ZABBIX_TAG_CREATE = 'zabbix_create',
  PHOTO_ITEM_SELECT_TAG = 'select_tag',
}

export enum ApiEndpoints {
  GET_INITIAL_STATE = 'getInitialState',
  GET_HOSTS = 'getHosts',
  DELETE_TAG = 'deleteTag',
  ADD_TAG = 'addTag',
  ADD_ZABBIX_TAG = 'addZabbixTag',
  UPLOAD_PHOTO = 'uploadPhoto',
  SKIP_PHOTO = 'skipPhoto',
}

export interface InitialState {
  photos: PhotoItem[];
  tags: TagItem[];
  alerts: AlertItem[];
  loading: boolean;
  hosts?: HostItem[];
}

export interface PropsTagsList {
  tags: TagItem[];
  setPopout: Dispatch<any>;
  saveInitialState: Dispatch<InitialState>;
}

export interface PropsAlertsList {
  alerts: AlertItem[];
  onClick: (alertItem: AlertItem | null) => void;
}

export interface PropsHostsList {
  alert: AlertItem | null;
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
  multiSelectPhoto: (photoItem: PhotoItem) => void;
  selectedPhotos: Record<number, PhotoItem>;
}

export interface PropsTabBar {
  photosListCounter: number;
  alerts: AlertItem[];
  activeStory: Views;
  onStoryChange: (e: any) => void;
}

export interface PropsFormTag {
  tag: TagItem;
  saveTag: () => void;
  onChangeTag: (e: any) => void;
}

export interface PropsFormZabbixTag {
  tag: ZabbixTagItem;
  saveTag: () => void;
  onChangeTag: (e: any) => void;
}

export interface PropsSelectTag {
  savePhotoItem: () => void;
  onSelectTag: (e: any) => void;
  tags: TagItem[];
}

export enum StatusEnum {
  DEFAULT = 'default',
  INFO = 'info',
  ALERT = 'alert'
}

export enum SeverityEnum {
  INFO = "1",
  NOTICE = "2",
  WARNING = "3",
  ERROR = "4",
  CRITICAL = "5"
}

export interface TagItem {
  id: number;
  title: string;
  folder: string;
}

export interface ZabbixTagItem {
  id: number;
  title: string;
}

export interface AlertItem {
  id: number;
  title: string;
  status: StatusEnum;
}

export interface HostItem {
  id: number;
  title: string;
  date: string;
  name: string;
  severity: SeverityEnum;
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
  caption: string;
}

declare const window: Window &
  typeof globalThis & {
  Telegram: ITelegram
};

interface ITelegram {
  WebApp?: {
    ready: () => void;
    expand: () => void;
    initData: string;
    initDataUnsafe?: {
      user?: {
        username: string
      }
    };
  }
}

export const Telegram = window.Telegram;
