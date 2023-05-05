import { AppRoot, Epic, Panel, PanelHeader, SplitCol, SplitLayout, View, Spinner, IconButton, PanelHeaderSubmit, ModalRoot, ModalPage } from '@vkontakte/vkui';
import { langs } from '../langs/ru.js';
import { ApiEndpoints, InitialState, Views, Modals, TagItem } from './Types';
import { PhotosList } from './PhotosList';
import { TagsList } from './TagsList';
import { AppTabBar } from './AppTabBar';
import * as React from 'react';
import { callMethod } from './Api';
import { useEffect } from 'react';
import { Icon28FolderSimplePlusOutline } from '@vkontakte/icons';
import { EditTagForm } from './EditTagForm';

export const App = () => {
  const [activeStory, setActiveStory] = React.useState<Views>(Views.PHOTOS);
  const [activeModal, setActiveModal] = React.useState<Modals>(null);
  const [activeTag, setActiveTag] = React.useState<TagItem>(null);
  const [initState, saveInitialState] = React.useState<InitialState>({ photos: [], tags: [], loading: true });
  const [popout, setPopout] = React.useState(null);

  const showTagEditModal = (tag: TagItem) => {
    setActiveModal(Modals.TAG_EDIT);
    setActiveTag(tag);
  };

  const onChangeTag = (e: any) => {
    const { name, value } = e.currentTarget;

    if (name === 'title') {
      activeTag.title = value;
    }

    if (name === 'folder') {
      activeTag.folder = value;
    }

    setActiveTag(activeTag);
  };

  const saveTag = () => {
    console.log(activeTag);
    setActiveTag(null);
    setActiveModal(null);
  };

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id={Modals.TAG_EDIT}><EditTagForm onChangeTag={onChangeTag} saveTag={saveTag} tag={activeTag} /></ModalPage>
    </ModalRoot>
  );

  async function init() {
    const response = await callMethod(ApiEndpoints.GET_INITIAL_STATE);
    const state = { ...response };
    state.loading = false;
    saveInitialState({ ...state });
  }

  useEffect(() => { init();}, []);

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
                <PanelHeader before={<PanelHeaderSubmit onClick={() => {showTagEditModal({ id: 0, folder: '', title: '' });}}>
                  <IconButton>
                    <Icon28FolderSimplePlusOutline />
                  </IconButton>
                </PanelHeaderSubmit>}>{langs.tags_list_title}</PanelHeader>
                <TagsList saveInitialState={saveInitialState} onChangeTag={onChangeTag} setPopout={setPopout} tags={initState.tags} />
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
