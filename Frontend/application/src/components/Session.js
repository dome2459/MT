import React, { Component } from 'react';


class Session extends Component {
    render() {
      // Hier erstellen Sie Ihr Objekt
      const Session = {
        sessionId : '',
        
      };
  
      return (
        <div>
          {/* Verwenden Sie Ihr Objekt in JSX */}
          <p>SessionId: {Session.sessionId}</p>
         
        </div>
      );
    }
  }
  