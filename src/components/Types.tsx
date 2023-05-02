export enum Views {
  PHOTOS = 'photos',
  TAGS = 'tags',
}

export enum ApiMethodsEnum {
  GET_INITIAL_STATE = 'getInitialState',
}

export interface PhotosListProps {
  photos: PhotoItem[];
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

export interface TabBarProps {
  photosListCounter: number;
  activeStory: Views;
  onStoryChange: (e: any) => void;
}

export interface TagItem {
  id: number;
  title: string;
  folder: string;
}

export interface InitialState {
  photos: PhotoItem[];
  tags: TagItem[];
  loading: boolean;
}

export interface PropsTagsList {
  tags: TagItem[];
}
