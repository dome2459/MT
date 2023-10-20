import React, { Component } from 'react';


class User extends Component {
    render() {
      // Hier erstellen Sie Ihr Objekt
      const User = {
        userName : '',
        
      };
  
      return (
        <div>
          {/* Verwenden Sie Ihr Objekt in JSX */}
          <p>UserName: {User.userName}</p>
         
        </div>
      );
    }
  }
  