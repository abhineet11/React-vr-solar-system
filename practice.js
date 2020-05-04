import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Box,
  Sphere,
  Cylinder,
  Animated,
  Model, 
  PointLight,
  AmbientLight
} from 'react-vr';
import {Easing} from 'react-native'

export default class firstVR extends React.Component {

  state = {
    text: 'state1',
    imageUrl : 'chess-world.jpg',
    index: 0,
    animateValue: new Animated.Value(2.1),
    moveY: new Animated.Value(2.1),
    animateModelValue: new Animated.Value(0),
  }

componentDidMount(){
  // Animated.timing(
  //   this.state.animateValue,
  //   {
  //     toValue: -0.3,
  //     duration: 1000,
  //     delay: 1000,
  //     //easing: Easing.bounce
  //     //easing: Easing.ease
  //    // easing: Easing.elastic(2)
  //     easing: Easing.back(2)
  //   }
  // ).start()
    this.rotate()
}

rotate = () => {
  this.state.animateModelValue.setValue(0)
  Animated.timing(
    this.state.animateModelValue,
    {
      toValue: 360,
      duration: 2500,
    //  delay: 1000,
      easing: Easing.linear,
      //easing: Easing.bounce
      //easing: Easing.ease
     // easing: Easing.elastic(2)
      //easing: Easing.back(2)
    }
  ).start(() => this.rotate())
}

handleSpring = () => {
  console.log('hey')
  Animated.spring(
    this.state.animateValue,
    {
      toValue: -0.5,
      friction: 2,
      tension: 30
    }
  ).start()

}
  startClick = () => {
    const {index} = this.state;
    if(index%2===0) {
      this.setState({
        text: 'state1',
        imageUrl : 'chess-world.jpg',
        index: index + 1
      })
    } else {
      this.setState({
        text: 'state2',
        imageUrl : 'original.jpg',
        index: index + 1
      })
    }
  }

  render() {
    const {text, imageUrl} = this.state;
    const AnimatedBox = Animated.createAnimatedComponent(Box) 
    const AnimatedModel = Animated.createAnimatedComponent(Model) 
    return (
      <View>
        <Pano source={asset(imageUrl)}/>
        {/* <VrButton onClick={() => this.handleSpring()}>
          <Animated.Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [
                {translateY: this.state.animateValue},
                {translateX: 0},
                {translateZ: -5},
              ],
            }}>
                {text}
          </Animated.Text>
        </VrButton>
        <AnimatedBox 
          dimWidth={0.35}
          dimDepth={0.35}
          dimHeight={0.35}
          //wireframe={true}
          texture={asset('original.jpg')}
          style={{
            color: 'white',
            transform: [{translate: [0, 0, -5]}, {translateY: this.state.moveY}, {rotateX: 50}, {rotateY: 50}, {rotateZ: 50}],
          }}
        />

        <Sphere 
          radius={0.1}
          widthSegments={16}
          heightSegment={16}
          texture={asset('original.jpg')}
          style={{
            color: 'white',
            transform: [{translate: [0.75, 0, -2]}, {rotateY: 50}, {scale: [2, 2, 2]}],
          }}
        />

        <Cylinder 
          radiusTop={0.2}
          radiusBottom={0.2}
          dimHeight={0.5}
          segments={90}
          texture={asset('original.jpg')}
          style={{
            color: 'white',
            transform: [{translate: [-0.75, 0, -2]}, {rotateX: 50}],
          }}
        /> */}
        <PointLight 
           style={{
             color: 'white',
              transform: [
                {translate: [10, 20, 0]}
              ]
            }}
        />
        {/* <AmbientLight 
           style={{
             color: 'white',
            }}
        /> */}
        
        <AnimatedModel 
            source={{
              obj: asset('boy.obj'),
              mtl: asset('boy.mtl')
            }}
            lit
            style={{
              transform: [
                {translate: [0, -8, -25]},
                {scale: [1, 1, 1]},
                {rotateY: this.state.animateModelValue}
              ]
            }}
        />

      
      </View>
    );
  }
};

AppRegistry.registerComponent('firstVR', () => firstVR);
