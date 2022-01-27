import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = "bf2e635d-8c10-476f-8457-cae21a17eecd"
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />} /
                >
            );
        }

        export default App;