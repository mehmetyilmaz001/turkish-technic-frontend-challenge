import React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { Query, List, Result, ErrorPage } from './features';
import locale from 'antd/es/locale/en_US';
import history from './utils/history';
import { PATHS } from './constants';

import './assets/styles/app.scss';

function App() {

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#E81932', borderRadius: 0 } }} locale={locale}>
      <Router basename="/"
        navigator={history}
        location={state.location}
        navigationType={state.action}
      >
        <Routes>
          <Route index element={<Query />} />
          <Route path={PATHS.LIST} element={<List />} />
          <Route path={PATHS.RESULT} element={<Result />}  />
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}



export default App;
