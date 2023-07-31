import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const ChatProps= useMultiChatLogic(
        '18657615-3ae3-4a4f-8470-dea70586d630',
        props.user.username,
        props.user.secret
    );
    return( 
        <div style={{height: '100vh'}}>
           <MultiChatSocket {...ChatProps} />
           <MultiChatWindow {...ChatProps} style={{height:'100%'}} />
        
        </div>
    )
  };
  export default ChatsPage;