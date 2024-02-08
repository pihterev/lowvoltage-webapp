import {Card, CardGrid, Group} from '@vkontakte/vkui';
import {AlertItem, PropsAlertsList, StatusEnum} from './Types';
import * as React from 'react';

export const AlertsList = ({alerts}: PropsAlertsList) => {
  alerts.sort((a, b) => {
    if (b.status === StatusEnum.DEFAULT && a.status !== StatusEnum.DEFAULT) {
      return -1;
    }

    if (a.status === StatusEnum.DEFAULT && b.status !== StatusEnum.DEFAULT) {
      return 1;
    }

    if (b.status === StatusEnum.INFO && a.status !== StatusEnum.INFO) {
      return -1;
    }

    if (a.status === StatusEnum.INFO && b.status !== StatusEnum.INFO) {
      return 1;
    }

    return 0;
  });

  return <>
    <Group>
      <CardGrid size="m">
        {alerts.map((alert: AlertItem) => {
          return <Card>
            <div className={"AlertItem AlertItem--" + alert.status}>{alert.title}</div>
          </Card>;
        })}
      </CardGrid>
    </Group>
  </>;
};
