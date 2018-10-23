import { Platform, ToastAndroid, Alert } from 'react-native'

function ErrorHandler (payload) {
  // console.tron.warn('-----ERROR------')
  // console.tron.warn(payload)
  switch (payload.problem) {
    case 'CLIENT_ERROR' :
      // console.tron.warn(payload.data.message)
      if (Platform.OS === 'ios') return Alert.alert(`Sorry something error`)
      console.tron.warn(payload)
      return console.tron.warn('Sorry something error')
    case 'SERVER_ERROR' :
      if (Platform.OS === 'ios') return Alert.alert('Server under maintenance')
      console.tron.warn(payload)
      return console.tron.warn('Server under maintenance')
    case 'TIMEOUT_ERROR' :
      if (Platform.OS === 'ios') return Alert.alert(`Server didn't respond`)
      console.tron.warn(payload)
      return console.tron.warn(`Server didn't respond`)
    case 'CONNECTION_ERROR' :
      if (Platform.OS === 'ios') return Alert.alert('Server not available')
      console.tron.warn(payload)
      return console.tron.warn(`Server not available`)
    case 'NETWORK_ERROR' :
      if (Platform.OS === 'ios') return Alert.alert('Network not available')
      console.tron.warn(payload)
      return console.tron.warn(`Network not available`)
    case 'CANCEL_ERROR' :
      if (Platform.OS === 'ios') return Alert.alert('Request has been canceled')
      console.tron.warn(payload)
      return console.tron.warn(`Request has been canceled`)
    default:
      if (Platform.OS === 'ios') return Alert.alert('Sorry something error')
      console.tron.warn(payload)
      return console.tron.warn('Sorry something error')
  }
}

export {
  ErrorHandler
}