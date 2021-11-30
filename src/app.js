import React, { useState } from 'react';

import Header from './components/header'
import emails from './data/emails';

import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);

  const countStarred = () => {
    let count = 0;
    emails.map(email => email.starred? count++ : count);
    return count;
  }

  const toggleRead = target => {
    const updatedEmails = emails.map(email =>
      email.id === target.id ? { ...target, read: !target.read } : email
    )
    setEmails(updatedEmails)
  }

  const toggleStar = target => {
    const updatedEmails = emails.map(email =>
      email.id === target.id ? { ...target, starred: !target.starred } : email
    )
    setEmails(updatedEmails)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{countStarred()}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => 
            <li class={`email ${email.read? "read" : "unread"}`}>
              <input
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
              />
              <input
                class="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStar(email)}
              />
              <p>{email.sender}</p>
              <p>{email.title}</p>
            </li>)
          }
        </ul>
      </main>
    </div>
  )
}

export default App
