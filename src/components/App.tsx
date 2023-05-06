import {
  AppRoot,
  Epic,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
  Spinner,
  IconButton,
  PanelHeaderSubmit,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
} from '@vkontakte/vkui';
import { langs } from '../langs/ru.js';
import { ApiEndpoints, InitialState, Views, Modals, TagItem } from './Types';
import { PhotosList } from './PhotosList';
import { TagsList } from './TagsList';
import { AppTabBar } from './AppTabBar';
import * as React from 'react';
import { callMethod } from './Api';
import { useEffect } from 'react';
import { Icon24Dismiss, Icon28FolderSimplePlusOutline } from '@vkontakte/icons';
import { EditTagForm } from './EditTagForm';

export const App = () => {
  const emptyTag = { title: '', folder: '', id: 0 };
  const [activeStory, setActiveStory] = React.useState<Views>(Views.PHOTOS);
  const [activeModal, setActiveModal] = React.useState<Modals>(null);
  const [activeTag, setActiveTag] = React.useState<TagItem>(emptyTag);
  const [initState, saveInitialState] = React.useState<InitialState>({ photos: [], tags: [], loading: true });
  const [popout, setPopout] = React.useState(null);

  const showTagAddModal = (tag: TagItem) => {
    setActiveModal(Modals.TAG_CREATE);
    setActiveTag(tag);
  };

  const onChangeTag = (e: any) => {
    const { name, value } = e.target;

    if (name === 'title') {
      activeTag.title = value;
    }

    if (name === 'folder') {
      activeTag.folder = value;
    }

    setActiveTag({ ...activeTag });
  };

  const saveTag = async () => {
    initState.loading = true;
    saveInitialState({ ...initState });
    const response = await callMethod(ApiEndpoints.ADD_TAG, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activeTag),
    });

    if (response === null) {
      initState.loading = false;
      saveInitialState({ ...initState });
      return;
    }

    const state = { ...response };
    state.loading = false;
    saveInitialState({ ...state });
    setActiveTag(emptyTag);
    setActiveModal(null);
  };

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage header={<ModalPageHeader
        after={<PanelHeaderButton onClick={() => {setActiveModal(null);}}>
          <Icon24Dismiss />
        </PanelHeaderButton>}
      >
      </ModalPageHeader>} hideCloseButton={true} id={Modals.TAG_CREATE}><EditTagForm onChangeTag={onChangeTag} saveTag={saveTag} tag={activeTag} /></ModalPage>
    </ModalRoot>
  );

  async function init() {
    const response = await callMethod(ApiEndpoints.GET_INITIAL_STATE);

    if (response === null) {
      return;
    }

    const state = { ...response };
    state.loading = false;
    saveInitialState({ ...state });
  }

  useEffect(() => {init();}, []);

  const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);

  if (initState.loading) {
    return <AppRoot><Spinner></Spinner></AppRoot>;
  }

  return (
    <AppRoot>
      <SplitLayout popout={popout} modal={modal} header={<PanelHeader separator={false} />} style={{ justifyContent: 'center' }}>
        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <Epic
            activeStory={activeStory}
            tabbar={
              <AppTabBar onStoryChange={onStoryChange} photosListCounter={initState.photos ? initState.photos.length : 0} activeStory={activeStory} />
            }
          >
            <View id={Views.PHOTOS} activePanel={Views.PHOTOS}>
              <Panel id={Views.PHOTOS}>
                <PanelHeader>{langs.photos_list_title}</PanelHeader>
                <PhotosList photos={initState.photos || []} />
              </Panel>
            </View>
            <View id={Views.TAGS} activePanel={Views.TAGS}>
              <Panel id={Views.TAGS}>
                <PanelHeader before={<PanelHeaderSubmit onClick={() => {showTagAddModal(emptyTag);}}>
                  <IconButton>
                    <Icon28FolderSimplePlusOutline />
                  </IconButton>
                </PanelHeaderSubmit>}>{langs.tags_list_title}</PanelHeader>
                <TagsList saveInitialState={saveInitialState} setPopout={setPopout} tags={initState.tags} />
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
