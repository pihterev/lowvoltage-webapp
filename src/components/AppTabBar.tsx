import {Counter, Tabbar, TabbarItem} from '@vkontakte/vkui';
import * as React from 'react';
import {Icon28ErrorCircleOutline, Icon28TagOutline, Icon28UserTagOutline} from '@vkontakte/icons';
import {PropsTabBar, StatusEnum, Views} from './Types';
import {langs} from '../langs/ru';

export const AppTabBar = ({activeStory, onStoryChange, photosListCounter, alerts}: PropsTabBar) => {
  let countAlerts = 0;

  alerts.map(alterItem => {
    if (alterItem.status === StatusEnum.ALERT || alterItem.status === StatusEnum.INFO) {
      countAlerts++;
    }

    return;
  })

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
    <TabbarItem
        indicator={countAlerts ? <Counter size="s" mode="prominent">{countAlerts}</Counter> : <></>}
        selected={activeStory === Views.ALERTS}
        data-story={Views.ALERTS}
        text={langs.alerts_list_title}
        onClick={onStoryChange}
    >
      <Icon28ErrorCircleOutline />
    </TabbarItem>
  </Tabbar>;
};
