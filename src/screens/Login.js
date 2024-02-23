import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import kakaoLogoPng from '../../assets/loginImage/kakaoLogo.png'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../authContext/AuthContext";
import * as KakaoLogin from "@react-native-seoul/kakao-login"


const kakaoLoginClick = (navigation,logIn) => {
    try{
        KakaoLogin.login().then((result) => {
            console.log("Login Success", JSON.stringify(result));
            getProfile(navigation,logIn);
        }).catch((error) => {
            if (error.code === 'E_CANCELLED_OPERATION') {
                console.log("Login Cancel", error.message);
            } else {
                console.log(`Login Fail(code:${error.code})`, error.message);
            }
        });
        
    }catch(e){
        console.log(e);
    }
}

const getProfile = (navigation,logIn) => {
    KakaoLogin.getProfile().then((result) => {
        console.log("GetProfile Success", JSON.stringify(result));
        const resultJson = result;
        const uri = 'http://192.168.219.107:7777/lubid-user/auth/user/join';
        
        axios.post(uri,{
            "userName" : resultJson.nickname,
            "email" : resultJson.nickname+"@kakao.com"
        },{
            withCredentials: true,
          })
        .then(function (response) {

            logIn();
            navigation.navigate('Home');
        })
        .catch(function (error) {
            // 이미 있는 아이디 일때는 로그인 시도
            const lginUri  = "http://192.168.219.107:7777/auth/user/login"
            
            console.log(error.message); // 에러 메시지 출력
            if (error.response) {
                console.log(error.response.data); // 응답 데이터 출력
                console.log(error.response.status); // 응답 상태 코드 출력
                console.log(error.response.headers); // 응답 헤더 출력
            }
        });
    }).catch((error) => {
        console.log(`GetProfile Fail(code:${error.code})`, error.message);
    });
};

// 로그인 체크
const loginCheck = (resultUserData) => {

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