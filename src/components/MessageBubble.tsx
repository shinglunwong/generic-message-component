import React from 'react';
import styled from 'styled-components';

const Bubble = styled.div<IMessageProps>`
    background-color: ${(props) => props.senderType === 'agent' ? "white" : "#39768f"};
    color: ${(props) => props.senderType === 'agent' ? "black" : "white"};
    align-self: ${(props) => props.senderType === 'agent' ? "flex-start" : "flex-end"};
    padding: 8px;
    border-radius: 4px;
    margin: 8px;
    max-width: 80%;
`

const Time = styled.p`
    font-size: 12px;
    opacity: 0.8;
`

const PreviewImage = styled.img`
    width: 100%;
    height: auto;
`
const FileImage = styled.img`
    width: 40px
`

interface IMessageBubbleProps {
    message: {
        id: string,
        content: any,
        contentType: string,
        senderType: string,
        createdAt: number,
    };
}
interface IMessageProps {
    senderType: string,
}

function MessageBubble({ message }: IMessageBubbleProps) {
    const { content, contentType, senderType, createdAt } = message;
    const time = new Date(createdAt * 1000).toISOString();

    const MessageContent = (type: string) => {
        switch (type) {
            case 'text':
                return <p>{message.content.text}</p>

            case 'image':
                return <PreviewImage src={message.content.url} />

            case 'attachment':
                return <a href={message.content.file} download><FileImage src="https://www.tangaroa.school.nz/wp-content/uploads/2019/07/wb-doc-icon.png" /></a>

            default:
                break;
        }
    }

    return (
        <Bubble senderType={senderType}>
            {MessageContent(contentType)}
            <Time>{time}</Time>
        </Bubble>
    );
}

export default MessageBubble;
