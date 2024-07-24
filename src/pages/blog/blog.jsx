import { View, Text, Swiper, SwiperItem, Progress, Form, Switch, Button, Textarea, Audio } from '@tarojs/components'
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
            <Button onClick={formSubmit}>提交</Button>
          </View>
        </Form>
      </View>
      <View className='components-page'>
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>
        <Text>这是一个可以自动聚焦的 textarea</Text>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>
      </View>
      <View>
        <Audio
          src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
          controls={true}
          autoplay={false}
          loop={false}
          muted={true}
          initialTime='30'
          id='video'
        />
      </View>
    </View>
  )
}
