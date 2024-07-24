import { View, Text, Swiper, SwiperItem, Progress, Form, Switch } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Blog() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const formSubmit = e => {
    console.log(e)
  }

  const formReset = e => {
    console.log(e)
  }

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
      <View className='components-page' style={{width: '30%'}}>
        <Progress percent={20} showInfo strokeWidth={2} />
        <Progress percent={40} strokeWidth={2} active showInfo />
        <Progress percent={60}  strokeWidth={2} active showInfo />
        <Progress percent={80}  strokeWidth={2} active activeColor='blue' showInfo />
      </View>
      <View>
        <Form onSubmit={formSubmit} onReset={formReset} >
          <View className='example-body'>
            <Switch name='switch' className='form-switch' />
          </View>
        </Form>
      </View>
    </View>
  )
}
