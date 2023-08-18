import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'

 function App() {
  const [count, setCount]=useState(0)     
  return (
    <View>
      <Text style={{fontSize:100}}>{count}</Text>
      <Button title="ReactNative" onPress={()=>setCount(count + 1)}/>
      <Button title="NativeProject" onPress={()=> setCount(count - 1)}/>
    </View>
  )
}
export default App;




