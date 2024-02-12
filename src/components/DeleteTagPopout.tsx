import {Alert, IconButton} from '@vkontakte/vkui';
import * as React from 'react';
import {Icon28Delete} from '@vkontakte/icons';
import {ApiEndpoints, PropsDeleteTagPopout} from './Types';
import {langs} from '../langs/ru';
import {callMethod} from './Api';

export const DeleteTagPopout = ({ tag, setPopout, saveInitialState }: PropsDeleteTagPopout) => {
  const deleteTag = async () => {
    const response = await callMethod(ApiEndpoints.DELETE_TAG, { id: tag.id });

    if (response === null) {
      return;
    }

    const state = { ...response };
    state.loading = false;
    saveInitialState({ ...state });
  };

  const closePopout = () => {
    setPopout(null);
  };

  const openDeletion = () => {
    setPopout(
      <Alert
        actions={[
          {
            title: langs.cancel_button,
            autoClose: true,
            mode: 'cancel',
          },
          {
            title: langs.delete_tag_button,
            autoClose: true,
            mode: 'destructive',
            action: () => {deleteTag().then(r => {console.log(r)});},
          },
        ]}
        actionsLayout="horizontal"
        onClose={closePopout}
        header={langs.delete_tag_title}
        text={langs.delete_tag_confirm.replace('{tag_name}', tag.title)}
      />,
    );
  };

  return (<IconButton onClick={openDeletion}>
      <Icon28Delete />
    </IconButton>
  );
};
