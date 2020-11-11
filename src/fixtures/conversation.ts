/**
 * `id` will always be unique
 * `content` simply describes the content of the message
 * `contentType` will be either 'text' | 'image' | 'attachment'
 * `senderType` can either be 'agent' | 'user'
 * `createdAt` will always be a Date and sorted
 */
export default [
  {
    id: '1',
    content: {
      text: "You can't hack the bandwidth without synthesizing the haptic CSS capacitor!",
    },
    contentType: 'text',
    senderType: 'agent',
    createdAt: 1603181211,
  },
  {
    id: '2',
    content: {
      text:
        "transmitting the program won't do anything, we need to quantify the auxiliary JSON driver!",
    },
    contentType: 'text',
    senderType: 'user',
    createdAt: 1603181151,
  },
  {
    id: '3',
    content: {
      url: 'https://source.unsplash.com/random',
    },
    contentType: 'image',
    senderType: 'user',
    createdAt: 1603181091,
  },
  {
    id: '4',
    content: {
      url: 'https://source.unsplash.com/random',
    },
    contentType: 'image',
    senderType: 'agent',
    createdAt: 1603181031,
  },
  {
    id: '5',
    content: {
      file: 'https://drive.google.com/uc?export=download&id=1ft-mFQ8ER27jBQJrE2SGdaIsKjnl8_cu',
    },
    contentType: 'attachment',
    senderType: 'user',
    createdAt: 1603180971,
  },
];
