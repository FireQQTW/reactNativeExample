import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import tronsauce from 'reactotron-apisauce'

if (__DEV__) {
  Reactotron
    .configure({
      host: '10.0.3.2'
    })
    .use(tronsauce())
    .use(trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
     }))
    .connect()

  console.tron = Reactotron
}
