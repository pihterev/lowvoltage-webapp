import {
  Counter,
  TabbarItem, Tabbar,
} from '@vkontakte/vkui';
import * as React from 'react';
import { Icon28UserTagOutline, Icon28TagOutline } from '@vkontakte/icons';
import { PropsTabBar, Views } from './Types';
import { langs } from '../langs/ru';

export const AppTabBar = ({ activeStory, onStoryChange, photosListCounter }: PropsTabBar) => {
  const indicator = photosListCounter > 0 ? <Counter size="s" mode="prominent">
    {photosListCounter}
  </Counter> : <></>;

  return <Tabbar mode="horizontal">
    <TabbarItem indicator={indicator}
      onClick={onStoryChange}
      selected={activeStory === Views.PHOTOS}
      data-story={Views.PHOTOS}
      text={langs.photos_list_title}
    >
      <Icon28UserTagOutline />
    </TabbarItem>
    <TabbarItem
      onClick={onStoryChange}
      selected={activeStory === Views.TAGS}
      data-story={Views.TAGS}
      text={langs.tags_list_title}
    >
      <Icon28TagOutline />
    </TabbarItem>
  </Tabbar>;
};
