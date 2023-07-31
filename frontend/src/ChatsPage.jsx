import {  PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return( 
        <div style={{height: '100vh'}} >
            <PrettyChatWindow
                projectId='18657615-3ae3-4a4f-8470-dea70586d630'
                username={props.user.username}
                secret={props.user.secret}
                style={{height:'100%'}}
            />
        
        </div>
    )
  };
  export default ChatsPage;