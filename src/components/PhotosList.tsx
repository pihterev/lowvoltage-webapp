import {Button, ButtonGroup, Group, Image, Placeholder, RichCell, IconButton} from '@vkontakte/vkui';
import {PropsPhotosList} from './Types';
import {Icon28Delete, Icon28UploadOutline, Icon56CameraOffOutline} from '@vkontakte/icons';
import {langs} from '../langs/ru';
import * as React from 'react';

export const PhotosList = ({ photos, selectTag, skipPhoto, multiSelectPhoto, selectedPhotos }: PropsPhotosList) => {

  return <>
    {photos.length > 0 ?
      <Group>
        {photos.map(item => {
          return <RichCell
            onClick={() => {
              multiSelectPhoto(item);
            }}
            className={selectedPhotos[item.id] ? 'PhotoItem--selected' : ''}
            hasActive={true}
            before={<Image src={item.url} size={172} />}
            caption={item.uploaded_chat_date}
            text={item.caption}
            actions={
              <ButtonGroup mode="horizontal" gap="m" stretched>
                <Button onClick={(e) => {
                  selectTag(item);
                  e.stopPropagation();
                  e.preventDefault();
                  return false;
                }} mode="secondary" size="s">
                  <IconButton>
                    <Icon28UploadOutline />
                  </IconButton>
                </Button>
                <Button onClick={(e) => {
                  skipPhoto(item);
                  e.stopPropagation();
                  e.preventDefault();
                  return false;
                }} mode="secondary" appearance="negative" size="s">
                  <IconButton>
                    <Icon28Delete />
                  </IconButton>
                </Button>
              </ButtonGroup>
            }
          >
            {item.uploaded_chat_author}
          </RichCell>;
        })}
      </Group>
      : <Group>
        <Placeholder
          icon={<Icon56CameraOffOutline />}
          action={<Button size="m" target="_blank" href={langs.yandex_disk_folder_link}>{langs.go_to_yandex_disk_action}</Button>}
        >
          {langs.placeholder_photos_list}
        </Placeholder>
      </Group>
    }
  </>;
};
