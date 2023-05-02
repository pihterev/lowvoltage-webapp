import {
  Epic,
  AppRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import { langs } from '../langs/ru.js';
import { Views, InitProps } from './Types';
import { PhotosList } from './PhotosList';
import { TagsList } from './TagsList';
import { AppTabBar } from './AppTabBar';

export const App = (initProps: InitProps) => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />} style={{ justifyContent: 'center' }}>
        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <Epic
            activeStory={Views.PHOTOS}
            tabbar={
              <AppTabBar photosListCounter={initProps.photos.length} />
            }
          >
            <View id={Views.PHOTOS} activePanel={Views.PHOTOS}>
              <Panel id={Views.PHOTOS}>
                <PanelHeader>{langs.photos_list_title}</PanelHeader>
                <PhotosList photos={initProps.photos} />
              </Panel>
            </View>
            <View id={Views.TAGS} activePanel={Views.TAGS}>
              <Panel id={Views.TAGS}>
                <TagsList />
              </Panel>
            </View>
          </Epic>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
