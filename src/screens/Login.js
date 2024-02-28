import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import kakaoLogoPng from '../../assets/loginImage/kakaoLogo.png';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../authContext/AuthContext";
import KakaoLoginGetProfile from "../components/KakaoLoginComponents/KakaoLoginGetProfile";

import { JwtSotrageCheck, JwtStorageSet, JwtStorageData } from "../components/AsyncData/JwtAsyncData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JoinComponent from "../components/Join/JoinComponent";
import LoginComponent from "../components/Login/LoginComponent";

const kakaoLoginClick = async (navigation,logIn) => {
    try{
        // JWT 토큰 값을 가지고있는지 체크
        const jwtValue = await AsyncStorage.getItem("LubidJwt");
        let profile;
        console.log("jwt value check : ", jwtValue);
        
        // jwt 토큰 확인
        if(jwtValue != null){
            console.log("empty jwt value");
            profile = KakaoLoginGetProfile(); // 카카오 프로파일 가져오기
            console.log(profile);
            jwtValue = LoginComponent({nickname : profile.nickname});
        }
        
        // jwt 토큰이 없으면 바로 회원가입진행 후 로그인 바로 진행
        if(jwtValue == null){
            JoinComponent({nickname : profile.nickname});
            jwtValue = LoginComponent({nickname : profile.nickname});
        }

        await AsyncStorage.setItem('LubidJwt', jwtValue);

        if(jwtValue == null){
            return null;
        }

        console.log(await AsyncStorage.getItem('LubidJwt'));
         //JwtStorageSet('LubidJwt','test');
         //JwtSotrageCheck('LubidJwt');
         logIn();
         navigation.navigate('Home');
        
    }catch(e){
        console.log(e);
    }
}

const normalLogin = (email, pwd)=>{
    console.log("normal login try....");
    console.log(email);
    console.log(pwd);
}



const Login = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigation = useNavigation();
    const { logIn } = useAuth();
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.lubidMainText}>LUBID</Text>
                <TextInput style={styles.inputStyle} placeholder="이메일" value={email} onChangeText={text=>setEmail(text)}/>
                <TextInput style={styles.inputStyle} placeholder="비밀번호" value={pwd} onChangeText={text=>setPwd(text)} secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{normalLogin(email,pwd)}}>
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
    
    lubidMainText:{
        color : 'black',
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
        marginTop : 5,
        color: 'black'
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