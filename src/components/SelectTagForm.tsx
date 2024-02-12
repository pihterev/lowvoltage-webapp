import {PropsSelectTag} from './Types';
import {langs} from '../langs/ru';
import {FormLayout, FormItem, Button, Radio} from '@vkontakte/vkui';
import * as React from 'react';

export const SelectTagForm = ({ onSelectTag, tags, savePhotoItem }: PropsSelectTag) => {
  return <FormLayout>
    <FormItem style={{ flexGrow: 1, flexShrink: 1 }} top={langs.select_tag_label}>
      {tags.map((tag) => {
        return <Radio onChange={onSelectTag} name="tag" value={tag.id} description={tag.folder}>
          {tag.title}
        </Radio>
      })}
    </FormItem>
    <FormItem>
      <Button onClick={() => { savePhotoItem(); }}>{langs.save_tag_button}</Button>
    </FormItem>
  </FormLayout>;
};

