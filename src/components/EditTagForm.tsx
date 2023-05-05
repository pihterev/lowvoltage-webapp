import { PropsFormTag } from './Types';
import { langs } from '../langs/ru';
import { FormLayout, FormItem, Button, Input } from '@vkontakte/vkui';

export const EditTagForm = ({ tag, saveTag, onChangeTag }: PropsFormTag) => {
  return <FormLayout>
    <FormItem top={langs.tag_label_title}>
      <Input name="title" onChange={onChangeTag} value={tag.title} placeholder={langs.tag_placeholder_title} />
    </FormItem>
    <FormItem top={langs.tag_label_folder}>
      <Input name="folder" onChange={onChangeTag} value={tag.folder} placeholder={langs.tag_placeholder_folder} />
    </FormItem>
    <FormItem>
      <Button onClick={saveTag}>{langs.save_tag_button}</Button>
    </FormItem>
  </FormLayout>;
};

