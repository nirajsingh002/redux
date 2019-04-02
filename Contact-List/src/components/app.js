import React from 'react';
import ContactList from '../containers/contact-list';
import ContactDetail from '../containers/contact-details';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ContactList />
        <ContactDetail />
      </div>
    )
  }
}
