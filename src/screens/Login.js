import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import kakaoLogoPng from '../../assets/loginImage/kakaoLogo.png'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../authContext/AuthContext";

const kakaoLoginClick = (navigation,logIn) => {
    try{
        const uri = 'http://10.0.2.2:7001/auth/test/welcome';

        axios.get(uri,null,{
            withCredentials: true,
          })
        .then(function (response) {
            console.log(response.data);
            logIn();
            navigation.navigate('Home');
          })
          .catch(function (error) {
            console.log(error.message); // 에러 메시지 출력
            if (error.response) {
                console.log(error.response.data); // 응답 데이터 출력
                console.log(error.response.status); // 응답 상태 코드 출력
                console.log(error.response.headers); // 응답 헤더 출력
            }
          });
    }catch(e){
        console.log(e);
    }
}


const Login = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigation = useNavigation();
    const { logIn } = useAuth();
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>LUBID</Text>
                <TextInput style={styles.inputStyle} placeholder="이메일" value={email} onChange={text=>setEmail(text)}/>
                <TextInput style={styles.inputStyle} placeholder="비밀번호" value={pwd} onChange={text=>setPwd(text)} secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle , styles.kakaoButtonStyle]} onPress={()=>{kakaoLoginClick(navigation,logIn)}}>
                    <Image style={styles.kakaoLogoPng} source={kakaoLogoPng}/>
                    <Text style={[styles.buttonText , styles.kakaoButtonText]}>카카오 로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    inputContainer : {
        width : '80%',
        marginTop : 15,
    },

    inputStyle : {
        width : '100%',
        backgroundColor : 'white',
        paddingHorizontal : 15,
        paddingVertical : 10,
        borderRadius : 10,
        marginTop : 5
    },

    buttonContainer : {
        width : '50%',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 30
    },

    buttonStyle : {
        backgroundColor : 'black',
        width : '100%',
        padding : 15,
        borderRadius : 10,
        alignItems : 'center',
        marginTop : 10
    },

    kakaoButtonStyle : {
        backgroundColor : '#FEE500',
        flexDirection : 'row',
    },

    buttonOutLine : {
        backgroundColor : 'white',
        marginTop : 5,
        borderColor : 'black',
        borderWidth: 1,
    },

    buttonText : {
        color : 'white',
        fontWeight : '500',
        fontSize : 16,
    },

    kakaoButtonText : {
        color : 'black',
        fontWeight : '500',
        fontSize : 16,
        marginLeft: 20
    },

    buttonOutLineText: {
        color : 'black',
        fontWeight : '500',
        fontSize : 16
    },

    kakaoLogoPng : {
        width : '20%',
        height : '150%'
    }
})