import { v4 as uuid } from 'uuid'

const defaultState = {  // chat history
  list: [
    {
      id: uuid(),
      author: 'Kotaku',
      comment: 'Nice to meet U!',
      time: new Date(),
      isMe: false,
      userid: 1,
      icon: '/5avatar.svg'
    },
  ],
}

const reducer = (state = defaultState, action) => {

  console.log(action)

  //reducer can only receive state, we can not change the state
  if (action.type === 'addMsg') {
    let newState = JSON.parse(JSON.stringify(state))
    const msg = action.value
    let newData = {
      id: uuid(),
      author: msg.sender,
      comment: msg.content,
      time: new Date(),
      isMe: false,
      icon: msg.icon,
    }
    newState.list.push(newData)
    //console.log(newState)
    return newState
  }

  return state
}

export default reducer