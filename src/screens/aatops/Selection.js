import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import { StyleSheet } from 'react-native';
import { Button,Image } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
const fontSize1=30;
const fontSize2=20;
const styles=StyleSheet.create({
    background_view:{
      backgroundColor:'#484848',
      flex:1
    },
    button:{
      backgroundColor:'#7b7b7b',
      width:'80%',
      height:'60%',
      alignSelf:'center'

    },
    text:{
      color:"#ffffff"
    }
});
export default class Connection extends Component{
    constructor(props){
      super(props);
    //  this.redirect=this.redirect.bind(this);
      let p="123";
    }

    // redirect(){
    //   let t=this.props.navigation.state.params;
    //   this.props.navigation.navigate("Master1",{props:t});
    // }
    render(){
      //console.log("selection props",this.props.screenProps);
      return(
        <View style={styles.background_view}>
            <View style={{flex:15,alignItems:'center'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:6,alignItems:'center'}}>
                    <Text style={{fontSize:fontSize1 ,color:styles.text.color}} >RECmote</Text>
                    <Text style={{fontSize:fontSize2 ,color:styles.text.color}}>Your powerful voice recorder</Text>

                    <Text style={{fontSize:fontSize1}}></Text>
                    <Text style={{fontSize:fontSize1 ,color:styles.text.color}}>You are</Text>
                </View>
            </View>
            <View style={{flex:5,flexDirection:'row'}} >
              <View style={{flex:1,alignItems:'center'}}>
                <Image
                  source={require('./images/recoder.png')}
                  style={{ width: 100, height:100 }}
                />
              </View>

              <View style={{flex:1,alignItems:'center'}}>
                <Image
                  source={require('./images/control.png')}
                  style={{ width: 100, height: 100 }}
                />
              </View>


            </View>

          <View style={{flex:8, alignItems:'flex-start',flexDirection:'row'} }>
              <View style={{flex:1}}>
                  <Button type='solid' title="Recoder" buttonStyle={styles.button} onPress={()=>this.props.navigation.navigate("Master_main_page")}/>
              </View>
              <View style={{flex:1}}>
                  <Button type='solid' title="Master" buttonStyle={styles.button} onPress={()=>{
                    this.props.navigation.navigate("Master1");
                  }}/>
              </View>


          </View>

          <View style={{flex:2}}></View>

      </View>
      );
    }
}
