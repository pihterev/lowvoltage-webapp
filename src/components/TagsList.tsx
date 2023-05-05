import { Group, SimpleCell } from '@vkontakte/vkui';
import { PropsTagsList, TagItem } from './Types';
import { DeleteTagPopout } from './DeleteTagPopout';
import * as React from 'react';

export const TagsList = ({ tags, setPopout, saveInitialState }: PropsTagsList) => {

  return <>
    <Group>
      {tags.map((tag: TagItem) => {
        return <SimpleCell
          subtitle={tag.folder}
          after={<DeleteTagPopout saveInitialState={saveInitialState} tag={tag} setPopout={setPopout} />}
        >
          {tag.title}
        </SimpleCell>;
      })}
    </Group>
  </>;
};
