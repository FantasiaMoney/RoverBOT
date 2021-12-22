  // check if user joined tg chanel
async function isTGJoined(BOT, userId, groupId){
  let isTGJoined

  try{
    const data = await BOT.getChatMember(groupId, userId)
    if(data.status !== 'left')
      isTGJoined = true
  }catch(e){
    console.log(e)
    isTGJoined = false
  }

  return isTGJoined
}

module.exports = isTGJoined
