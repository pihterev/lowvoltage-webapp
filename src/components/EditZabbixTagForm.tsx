import {PropsFormZabbixTag} from './Types';
import {langs} from '../langs/ru';
import {FormLayout, FormItem, Button, Input} from '@vkontakte/vkui';

export const EditZabbixTagForm = ({tag, saveTag, onChangeTag}: PropsFormZabbixTag) => {
  return <FormLayout>
    <FormItem top={langs.tag_label_title}>
      <Input name="title" onChange={onChangeTag} value={tag.title} placeholder={langs.tag_placeholder_title}/>
    </FormItem>
    <FormItem>
      <Button onClick={saveTag}>{langs.save_tag_button}</Button>
    </FormItem>
  </FormLayout>;
};

