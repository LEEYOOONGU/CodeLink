import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import CustomButton from '../CustomButton';
type Props = {};
export default class ChatManageTab extends Component {
      constructor(props) {
        super(props);
        this.state = {
        progress: new Animated.Value(0),
    };
  }
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='md-add-circle' size={300} style={{color: tintColor}} />
        ),
    }
 
    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.font_header}>ChatManage</Text>
                </View>
                <View style={style.content}>
                <View style={style.search}>
                    <Text style={style.font_header}>searchTab</Text>
                </View>
                    <View style ={style.buttongroup}>
                     <LottieView  source={require('../LottieAnimation/8874-cat.json')} autoplay loop/>
                        <View style = {style.group}>
                                    <View style={style.button1}>
                                        <CustomButton
                                            title={'Sports'}
                                            titleColor={'#ddd'}
                                            buttonColor={'#000'}/>
                                    </View>
                                    <View style={style.button2}>
                                          <CustomButton
                                            title={'Movie'}
                                            titleColor={'#000'}
                                             buttonColor={'#ddd'}/>
                                     </View>
                        </View>
                        <View style = {style.group}>
                                 <View style={style.button3}>
                                        <CustomButton
                                            title={'Korea'}
                                            titleColor={'#ddd'}
                                            buttonColor={'red'}/>
                                     </View>
                            <View style={style.button4}>
                                        <CustomButton
                                            title={'Food'}
                                            titleColor={'#000'}
                                            buttonColor={'green'}/>
                                        </View>
                        </View>
                        <View style = {style.group}>
                                 <View style={style.button5}>
                                        <CustomButton
                                            title={'SNS'}
                                            titleColor={'#ddd'}
                                            buttonColor={'orange'}/>
                                        </View>
                                <View style={style.button6}>
                                          <CustomButton
                                            title={'Seoul'}
                                            titleColor={'#000'}
                                             buttonColor={'skyblue'}/>
                                         </View>
                        </View>
                    </View>
              </View>
            </View>
           

        );
    }
}

const style = StyleSheet.create({
     header: {
        width:'100%',
        height:'12%',
        justifyContent: 'flex-end',
        paddingLeft: '4%',
        paddingBottom: '1.1%',
        backgroundColor: '#555',
    },
    search: {
        width:'100%',
        height:'20%',
        justifyContent: 'flex-end',
        paddingLeft: '4%',
        paddingBottom: '1.1%',
        backgroundColor: '#666',
    },
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    font_header: {
        color: 'white',
        fontSize: 42,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',    
    },
    buttongroup :{
        height: '80%',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
      
      },
    group: {
        width: '100%',
        height: '33%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       // backgroundColor: "white",
    },
    button1: {
        width:'20%',
        height:'10%',
        marginRight: '15%',
        marginTop: '16%',
        paddingTop: '25%',
      },
    button2: {
        width:'20%',
        height:'10%',
        marginTop: '16%',
        paddingTop: '25%',
    },
    button3: {
        width:'20%',
        height:'15%',
        marginRight: '25%',
    },
    button4: {
        width:'20%',
        height:'15%',
    },
    button5: {
        width:'20%',
        height:'10%',
        marginRight: '15%',
        marginBottom: '20%',
        paddingBottom: '30%',
    },
    button6: {
        width:'20%',
        height:'10%',
        marginBottom: '20%',
        paddingBottom: '30%',
    },
    font_main: {
        color: '#aaa',
        fontSize: 15,
        alignItems: 'center',
    },
});