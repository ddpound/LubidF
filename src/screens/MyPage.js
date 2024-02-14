import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../authContext/AuthContext";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const logout = (logOut) =>{
    console.log('logout');
    logOut();
}

const MyPage = () => {
    const {logOut} = useAuth();
    return (
        <SafeAreaView>
            <Text> MyPage </Text>
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
    }
})