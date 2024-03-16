import { SafeAreaView, StyleSheet, Text, View } from "react-native"

const SellerAuthenticationScreen = () =>{
    return (
        <SafeAreaView>
            <View>
                <Text style={StyleSheet.mainText}>판매자 인증 페이지 입니다.</Text>
            </View>
        </SafeAreaView>
    )
}

export default SellerAuthenticationScreen;

const styles = StyleSheet.create({
    mainText : {
        color : "black",
    }
})