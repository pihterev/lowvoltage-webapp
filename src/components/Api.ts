import { ApiEndpoints, InitialState } from './Types';

const apiHost = 'http://localhost:8085/';

export const callMethod = async (endpoint: ApiEndpoints, requestParams?: RequestInit): Promise<InitialState> => {
  let response = await fetch(apiHost + endpoint, requestParams);

  if (response.ok) {
    return await response.json();
  } else {
    alert('Ошибка API запроса: ' + response.status + '. Метод: ' + endpoint);
  }

  return null;
};
