import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Blog() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text style={{background: 'yellowgreen'}}>blog page!</Text>
    </View>
  )
}
