import {Group, RichCell, Spinner} from '@vkontakte/vkui';
import {AlertItem, ApiEndpoints, HostItem, PropsHostsList, SeverityEnum} from './Types';
import * as React from 'react';
import {useEffect} from 'react';
import {Icon56ErrorTriangleOutline} from "@vkontakte/icons";
import {callMethod} from "./Api";

export const HostsList = ({alert}: PropsHostsList) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [hosts, setHosts] = React.useState<HostItem[]>([]);
  const getHosts = async (alert: AlertItem) => {
    setLoading(true);
    const response = await callMethod(ApiEndpoints.GET_HOSTS, {alert: {...alert}});

    if (response === null) {
      setLoading(false);
      return;
    }

    const state = {...response};
    setLoading(false);
    setHosts(state.hosts);
  };

  useEffect( () => {
     getHosts(alert).then(
         r => {console.log(r)}
     );
  }, []);

  if (loading) {
    return <>
      <Group>
        <Spinner></Spinner>
      </Group>
    </>;
  }

  const getSeverity = (hostItem: HostItem): string => {
    switch (hostItem.severity) {
      case SeverityEnum.CRITICAL:
        return "чрезвычайная";
      case SeverityEnum.ERROR:
        return "высокая";
      case SeverityEnum.WARNING:
        return "средняя";
      case SeverityEnum.NOTICE:
        return "предупреждение";
      case SeverityEnum.INFO:
        return "информационная";
    }
  }

  hosts.sort((a, b) => {
    if (b.severity > a.severity) {
      return 1;
    }

    if (b.severity < a.severity) {
      return -1;
    }
    
    return 0;
  });

  return <>
    <Group>
      {hosts.map((hostItem: HostItem) => {
        return <RichCell
            subhead={hostItem.name}
            caption={hostItem.date}
            afterCaption={getSeverity(hostItem)}
            before={<Icon56ErrorTriangleOutline className={'HostItem__icon--' + hostItem.severity}/>}>
          {hostItem.title}
        </RichCell>
      })}
    </Group>
  </>;
};
