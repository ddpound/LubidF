import { SafeAreaView, StyleSheet, Text } from "react-native"


const SellScreen = ()=>{

    return (
        <SafeAreaView>
            <Text style={styles.mainText}>판매 페이지 입니다.</Text>
        </SafeAreaView>
    )
}

export default SellScreen;

const styles = StyleSheet.create({
    mainText : {
        color : "black",
    }
})