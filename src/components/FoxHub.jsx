import React, {useState} from "react";
import { Image, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";


export default () => {




    return (
         <View>
            <Text style={{
                 fontWeight: 'bold',
           fontSize: 30,
               color: 'black',
               marginLeft: 10,
               marginTop: 90
             }}>Welcome Back,</Text>
             <Text style={{
                 marginLeft: 12,
                fontSize: 18
           }}>Sign up to continue</Text>
            
            <TextInput placeholder="Email" keyboardType="email-address" style={{
                borderRadius: 25,
                borderWidth: 1,
                marginLeft: 5,
                marginTop: 20,
                padding: 5
                
            }}/>
         </View>






        // <SafeAreaView style={{
        // flex: 1
       
        // }}>
        //     <Text style={{
        //         fontWeight: 'bold',
        //         fontSize: 30,
        //         color: 'black',
        //         marginLeft: 10,
        //         marginTop: 90
        //     }}>Welcome Back,</Text>
        //     <Text style={{
        //         marginLeft: 12,
        //         fontSize: 18
        //     }}>Sign up to continue</Text>

        //     <View style={{
        //           margin: 10,
        //     }}>
        //     <View style={{
        //             flexDirection: 'row',
        //             backgroundColor: '#fff',
        //             borderWidth: 0.5,
        //             borderColor: '#000',
        //             height: 40,
        //             borderRadius: 5,
        //             margin: 1,
        //             marginTop: 50,
        //     }}>
        // <Image source={require('../imagens/mail.png')} style={{
        //          padding: 10,
        //          margin: 5,
        //          height: 25,
        //          width: 25,
        //          resizeMode: 'stretch',
        //          alignItems: 'center',
        // }}/>
        // <TextInput placeholder="Email" keyboardType="email-address" style={{
        //   flex: 1,

        // }}>
        // </TextInput>
      
           
        //     <View style={{
        //             flexDirection: 'row',
        //             backgroundColor: '#fff',
        //             borderWidth: 0.5,
        //             borderColor: '#000',
        //             height: 40,
        //             borderRadius: 5,
        //             margin: 1,
        //             marginTop: 50,
                
        //     }}>
        // <Image source={require('../imagens/mail.png')} style={{
        //          padding: 10,
        //          margin: 5,
        //          height: 25,
        //          width: 25,
        //          resizeMode: 'stretch',
        //          alignItems: 'center',
        //          marginLeft: 250,
        // }}/>
        // <TextInput placeholder="Passowrd" keyboardType="numeric" style={{

        // }}>
        // </TextInput>



        // </View>
        // </View>
        // </View>
       


       
        // </SafeAreaView>
    )
}