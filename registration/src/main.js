import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import showResults from './js/showResults';
import store from './store/registrationStore';

import MaterialUiForm from './containers/MaterialUiForm';
//
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import createMuiTheme from 'material-ui/styles/theme'
//
// import {grey, amber} from 'material-ui/styles/colors'
//
// import createPalette from 'material-ui/styles/palette'
//
// const muiTheme = createMuiTheme({
//     palette: createPalette({
//       primary: grey,
//       accent: amber,
//       error: red,
//       type: 'dark'
//     })
// })


ReactDOM.render(
  <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2>Material UI Example</h2>
          <MaterialUiForm onSubmit= {showResults} />
      </div>
    </Provider>
  , document.getElementById('root'));
