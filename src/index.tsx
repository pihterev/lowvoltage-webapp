import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AdaptivityProvider, ConfigProvider, Platform } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/components.css';

import { App } from './components/App';

ReactDOM.render(
  <ConfigProvider platform={Platform.IOS} appearance="light">
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById('app'),
);
