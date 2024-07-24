import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Blog() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text style={{background: 'yellowgreen'}}>blog page!</Text>
      {/* 自动轮播组件 */}
      <Swiper
        className="box"
        autoplay
        interval={3000}
        indicatorColor="lightblue"
        onClick={() => {}}
        onAnimationFinish={() => {}}
      >
        <SwiperItem>
          <View className="text">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="text">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="text">3</View>
        </SwiperItem>
      </Swiper>
    </View>
  )
}
