import {Group, SimpleCell} from '@vkontakte/vkui';
import {PropsTagsList, TagItem} from './Types';
import {DeleteTagPopout} from './DeleteTagPopout';
import * as React from 'react';
import {langs} from '../langs/ru';

export const TagsList = ({ tags, setPopout, saveInitialState }: PropsTagsList) => {

  return <>
    <Group>
      {tags.map((tag: TagItem) => {
        return <SimpleCell
          subtitle={tag.folder}
          after={<DeleteTagPopout saveInitialState={saveInitialState} tag={tag} setPopout={setPopout} />}
        >
          <a target="_blank" href={langs.yandex_disk_folder_link + tag.folder}>{tag.title}</a>
        </SimpleCell>;
      })}
    </Group>
  </>;
};
