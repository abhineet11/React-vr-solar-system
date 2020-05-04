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
    rotation: 0,
    antiRotation: 360,
    angle1: 30,
    angle2: 50,
    angle3: 70,
    angle4: 90,
    angle5: 110,
    angle6: 130,
    angle7: 150,
    

  }

componentDidMount(){
    this.rotate()
}

rotate() {
  this.setState((prevState) => ({
    rotation: prevState.rotation + 1,
    antiRotation: prevState.antiRotation - 1,
    angle1: prevState.angle1 - 0.0050,
    angle2: prevState.angle2 - 0.0050,
    angle3: prevState.angle3 - 0.0050,
    angle4: prevState.angle4 - 0.0050,
    angle5: prevState.angle5 - 0.0050,
    angle6: prevState.angle6 - 0.0050,
    angle7: prevState.angle7 - 0.0050 
  }))
  if(this.state.rotation > 360) {
    this.setState({
      rotation: 1
    })
  }
  if(this.state.antiRotation < 1) {
    this.setState({
      antiRotation: 360
    })
  }
  setTimeout(() => {
    requestAnimationFrame(this.rotate())
  }, 0)
}

  render() {
    const {angle1, angle2, angle3, angle4, angle5, angle6} = this.state;
    const AnimatedBox = Animated.createAnimatedComponent(Box) 
    const AnimatedModel = Animated.createAnimatedComponent(Model) 
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <PointLight 
           style={{
             color: 'white',
              transform: [
                {translate: [-40, 0, 0]}
              ]
            }}
        />
        <Model 
            source={{
              obj: asset('sphere.obj')
            }}
            texture={asset('sun.jpg')}
            style={{
              transform: [
                {translate: [-40, 0, 0]},
                {scale: [5, 5, 5]},
                {rotateY: this.state.rotation}
              ]
            }}
        />
        <Model 
            source={{
              obj: asset('sphere.obj')
            }}
            lit
            texture={asset('mercury.jpg')}
            style={{
              transform: [
                {translate: [70*Math.cos(angle1), 0, 60*Math.sin(angle1)]},
                {scale: [0.8, 0.8, 0.8]},
                {rotateY: this.state.rotation}
              ]
            }}
        />
        <Model 
            source={{
              obj: asset('sphere.obj')
            }}
            lit
            texture={asset('venus.jpg')}
            style={{
              transform: [
                {translate: [70*Math.cos(angle2), 0, 60*Math.sin(angle2)]},
                {scale: [1.8, 1.8, 1.8]},
                {rotateY: this.state.antiRotation}
              ]
            }}
        />
         <Model 
            source={{
              obj: asset('sphere.obj')
            }}
            lit
            texture={asset('earth.png')}
            style={{
              transform: [
                {translate: [70*Math.cos(angle3), 0, 60*Math.sin(angle3)]},
                {scale: [2.5, 2.5, 2.5]},
                {rotateY: this.state.rotation}
              ]
            }}
        />
         <Model 
            source={{
              obj: asset('sphere.obj')
            }}
            lit
            texture={asset('mars.jpg')}
            style={{
              transform: [
                {translate: [70*Math.cos(angle4), 0, 60*Math.sin(angle4)]},
                {scale: [1.8, 1.8, 1.8]},
                {rotateY: this.state.rotation}
              ]
            }}
        />
         <Model 
            source={{
              obj: asset('sphere.obj')
            }}
            lit
            texture={asset('jupiter.jpg')}
            style={{
              transform: [
                {translate: [70*Math.cos(angle5), 0, 60*Math.sin(angle5)]},
                {scale: [3.8, 3.8, 3.8]},
                {rotateY: this.state.rotation}
              ]
            }}
        />

          <Model 
            source={{
              obj: asset('Saturn.obj')
            }}
            lit
            texture={asset('saturn.jpg')}
            style={{
              transform: [
                {translate: [70*Math.cos(angle6), 0, 60*Math.sin(angle6)]},
                {scale: [5.8, 5.8, 5.8]},
                {rotateX: 20},
                {rotateY: this.state.rotation}
                
              ]
            }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('firstVR', () => firstVR);
