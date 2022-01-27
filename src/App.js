import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;    
    
    return (
        <ChatEngine
          height="100vh"
          projectID="7bfa8423-bdbf-4fcf-95b5-a5fa58233a43"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;