import { SafeAreaView, StyleSheet, Text } from "react-native"

const CategorySreen = ()=>{
    return (
        <SafeAreaView>
            <Text style={styles.mainText}>카테고리 페이지 입니다.</Text>
        </SafeAreaView>
    )
}

export default CategorySreen;

const styles = StyleSheet.create({
    mainText : {
        color : "black",
    }
})