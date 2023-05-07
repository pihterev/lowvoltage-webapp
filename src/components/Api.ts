import { ApiEndpoints, InitialState, Telegram } from './Types';

const apiHost = 'http://localhost:8085/';

export const callMethod = async (endpoint: ApiEndpoints, requestParams?: any): Promise<InitialState> => {
  requestParams = requestParams || {};
  requestParams.access_token = Telegram.WebApp.initData;

  let response = await fetch(apiHost + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
