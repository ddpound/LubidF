import { SafeAreaView, StyleSheet, Text } from "react-native"


const SearchScreen = ()=>{

    return (
        <SafeAreaView>
            <Text style={styles.mainText}>검색 페이지 입니다.</Text>
        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    mainText : {
        color : "black",
    }
})