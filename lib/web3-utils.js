import web3 from 'web3'

export async function getAccounts(web3Instance) {
  return await web3Instance.eth.getAccounts()
}

export async function sendTransaction(web3Instance, to, value) {
  value = web3Instance.utils.toWei(value.toString(), 'ether')
  const fromAddrs = await getAccounts(web3Instance)
  if (!fromAddrs || !fromAddrs.length){
    throw new Error('No accounts for web3')
  }

  txId = await web3Instance.eth.sendTransaction({
    from: fromAddrs[0],
    to,
    value
  })

  if (!txId) {
    throw new Error("Transaction was denied")
  }
  return txId
}

