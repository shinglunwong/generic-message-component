import React, { Component } from 'react';
import styled from 'styled-components';

/** Conversation Data */
import conversationData from './fixtures/conversation';
/** Components **/
import MessageBubble from './components/MessageBubble';

const StyledApp = styled.div`
  background-color: #213d45;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const MessageContainer = styled.div`
  background-color: #d8e2e6;
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 844px;
  border-radius: 12px;
  padding: 20px;
  overflow: scroll;
`

function App() {
  return (
    <StyledApp>
      <MessageContainer>
        {
          conversationData.map(e => {
            return <MessageBubble message={e} />
          })
        }
      </MessageContainer>
    </StyledApp>
  );
}

export default App;
