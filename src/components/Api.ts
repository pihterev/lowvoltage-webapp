import { ApiMethodsEnum, InitialState } from './Types';

const apiHost = 'http://localhost:8085/';

export const callMethod = async (method: ApiMethodsEnum): Promise<InitialState> => {
  let response = await fetch(apiHost + method);

  if (response.ok) {
    return await response.json();
  } else {
    alert('Ошибка API запроса: ' + response.status + '. Метод: ' + method);
  }
};
