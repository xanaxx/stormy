import React from 'react';
import { render } from 'react-dom';

import Home from './containers/Home';

import { colors } from './styles';
import { injectGlobal } from 'emotion';
import { IntlProvider, addLocaleData } from 'react-intl';
import pl from 'react-intl/locale-data/pl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';

import localeData from './locale';

addLocaleData([...pl, ...en, ...de]);

/* eslint-disable no-unused-expressions */
injectGlobal`
html{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
body{
  background-color: ${colors.background} ;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
*:focus {
    outline: 0;
}`;

// Create main App component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en',
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(language) {
        this.setState({ language: language });
    }

    render() {
        return (
            <IntlProvider
                locale={this.state.language}
                messages={localeData[this.state.language]}
            >
                <Home changeLanguage={this.changeLanguage} />
            </IntlProvider>
        );
    }
}

// Create your own root div in the body element before rendering into it
const root = document.createElement('div');

// Add id 'root' and append the div to body element
root.id = 'root';
document.body.appendChild(root);

// Render the application into the DOM, the div inside index.html
render(<App />, document.getElementById('root'));
