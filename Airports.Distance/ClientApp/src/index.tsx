import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, StrictMode, Fragment } from 'react';
import App from './App';
import './assets/style/scss/site.scss';
import { store } from './store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

function AppRenderer() {
  return (
    <Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <StrictMode>
            <App />
          </StrictMode>
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}

root.render(<AppRenderer />);

serviceWorkerRegistration.register();
