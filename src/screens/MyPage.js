import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../authContext/AuthContext";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import axios from "axios";

const logout = (logOut) =>{
    console.log('logout');
    logOut();
}

const MyPage = () => {
    let jwt;
    useEffect(()=>{
        // 로그인되어있는 유저의 개인정보를 가져와야함
        // 단 바로가져오지말아야하 하지만 일단 바로 띄어주기

        axios.get('',{},{
            headers: {
                "AUTHORIZATION" : "Bearer " + jwt
            }
        });
    },[]);

    const {logOut} = useAuth();
    return (
        <SafeAreaView>
            <Text style={styles.titleText}> MyPage </Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{logout(logOut)}}>
                <Text>로그아웃</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MyPage;

const styles = StyleSheet.create({
    buttonStyle : {
        backgroundColor : 'gray',
        width : '100%',
        padding : 15,
        borderRadius : 10,
        alignItems : 'center',
        marginTop : 10
    },
    titleText : {
        color : 'black',
    },
})