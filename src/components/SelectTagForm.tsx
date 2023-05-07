import { PropsSelectTag } from './Types';
import { langs } from '../langs/ru';
import { FormLayout, FormItem, Button, CustomSelect, CustomSelectOption } from '@vkontakte/vkui';
import * as React from 'react';

export const SelectTagForm = ({ onSelectTag, tags, savePhotoItem }: PropsSelectTag) => {
  const options = tags.map(tag => {
    return {
      label: tag.title,
      value: `${tag.id}`,
      description: tag.folder,
    };
  });

  return <FormLayout>
    <FormItem style={{ flexGrow: 1, flexShrink: 1 }} top={langs.select_tag_label}>
      <CustomSelect
        placeholder={langs.select_tag_placeholder}
        options={options}
        selectType="default"
        allowClearButton
        onChange={onSelectTag}
        renderOption={({ ...props }) => {
          return <CustomSelectOption {...props} description={props.option.description} />;
        }}
      />
    </FormItem>
    <FormItem>
      <Button onClick={() => { savePhotoItem(); }}>{langs.save_tag_button}</Button>
    </FormItem>
  </FormLayout>;
};

