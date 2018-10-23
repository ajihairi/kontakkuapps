import { Platform, ToastAndroid, Alert } from 'react-native'

function ErrorHandler (payload) {
  // console.tron.warn('-----ERROR------')
  // console.tron.warn(payload)
  switch (payload.problem) {
    case 'CLIENT_ERROR' :
      // console.tron.warn(payload.data.message)
      if (Platform.OS === 'ios') return alert.Alert(`Sorry something error`)
      console.tron.warn(payload)
      return console.tron.warn('Sorry something error')
    case 'SERVER_ERROR' :
      if (Platform.OS === 'ios') return alert.Alert('Server under maintenance')
      console.tron.warn(payload)
      return console.tron.warn('Server under maintenance')
    case 'TIMEOUT_ERROR' :
      if (Platform.OS === 'ios') return alert.Alert(`Server didn't respond`)
      console.tron.warn(payload)
      return console.tron.warn(`Server didn't respond`)
    case 'CONNECTION_ERROR' :
      if (Platform.OS === 'ios') return alert.Alert('Server not available')
      console.tron.warn(payload)
      return console.tron.warn(`Server not available`)
    case 'NETWORK_ERROR' :
      if (Platform.OS === 'ios') return alert.Alert('Network not available')
      console.tron.warn(payload)
      return console.tron.warn(`Network not available`)
    case 'CANCEL_ERROR' :
      if (Platform.OS === 'ios') return alert.Alert('Request has been canceled')
      console.tron.warn(payload)
      return console.tron.warn(`Request has been canceled`)
    default:
      if (Platform.OS === 'ios') return ToastAndroid.show('Sorry something error')
      console.tron.warn(payload)
      return console.tron.warn('Sorry something error')
  }
}

export {
  ErrorHandler
}