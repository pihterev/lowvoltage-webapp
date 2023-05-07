import { Button, ButtonGroup, Group, Image, Placeholder, RichCell } from '@vkontakte/vkui';
import { PropsPhotosList } from './Types';
import { Icon56CameraOffOutline } from '@vkontakte/icons';
import { langs } from '../langs/ru';
import * as React from 'react';

export const PhotosList = ({ photos, selectTag }: PropsPhotosList) => {
  return <>
    {photos.length > 0 ?
      <Group>
        {photos.map(item => {
          return <RichCell
            before={<Image src={item.url} size={172} />}
            caption={item.uploaded_chat_date}
            actions={
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button onClick={() => {selectTag(item)}} mode="primary" size="s">
                  {langs.upload_to_yandex_disk_button}
                </Button>
              </ButtonGroup>
            }
            disabled
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
  </>
};
