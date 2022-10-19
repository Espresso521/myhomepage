import { v4 as uuid } from 'uuid'

const defaultState = {  // chat history
  list: [
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Nice to meet U!',
      time: Date().substring(0, 24),
      isMe: false,
      userid: 1,
      icon: '/5avatar.svg'
    },
  ],
}

const reducer = (state = defaultState, action) => {

  //reducer can only receive state, we can not change the state
  if (action.type === 'addMsg') {
    var newState = JSON.parse(JSON.stringify(state))
    newState.list.push({
      id: uuid(),
      author: action.value.sender,
      comment: action.value.content,
      time: Date().substring(0, 24),
      isMe: false,
      icon: action.value.icon,
    })
    return newState
  } else if (action.type === 'addMyMsg') {
    var newState = JSON.parse(JSON.stringify(state))
    newState.list.push({
      id: uuid(),
      author: action.value.sender,
      comment: action.value.content,
      time: Date().substring(0, 24),
      isMe: true,
      icon: action.value.icon,
    })
    return newState
  }

  return state
}

export default reducer