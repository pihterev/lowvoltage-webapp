import {ApiEndpoints, InitialState, Telegram} from './Types';

const apiHost = 'https://functions.yandexcloud.net/d4eb7s840vgko3bs9nj4';

export const callMethod = async (endpoint: ApiEndpoints, requestParams?: any): Promise<InitialState> => {
  requestParams = requestParams || {};
  requestParams.access_token = Telegram.WebApp.initData;

  let response = await fetch(apiHost, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Endpoint': endpoint
    },
    body: JSON.stringify(requestParams),
  });

  if (response.ok) {
    return await response.json();
  } else {
    alert('Ошибка API запроса: ' + response.status + '. Метод: ' + endpoint);
  }

  return null;
};
