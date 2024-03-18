import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from "react-native"


const SearchScreen = ()=>{

    return (
        <SafeAreaView>
            <View style={styles.topView} >
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.mainText}>검색</Text>
            </View>
            <View style={styles.searchHeaderView}>
                <Text style={styles.searchHeaderText}>검색어 순위</Text>
            </View>
            <View style={styles.searchView}>
                <Text style={styles.searchViewText}>랭킹 1~10</Text>
            </View>
            <View style={styles.nextButtonView}>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    topView :{
        height : 40,
        flexDirection : 'row',
        marginTop: 10,
        marginLeft : 20,
    },
    mainText : {
        color : "black",
        textAlign : "center",
        textAlignVertical : "center",
        height: "100%",
        width: "35%",
        fontSize : 25,
    },
    backButton:{
        width : "30%",
        fontSize : 30,
    },
    backButtonText :{
        color : "black",
        textAlign : "left",
        textAlignVertical : "center",
        height: "100%",
        fontSize : 30,
    },

    // 검색어 순위
    searchHeaderView : {
        margin : 20,
    },
    searchHeaderText:{
        color : 'black',
        fontSize : 20,
    },
    searchView : {
        backgroundColor : 'gray',
        margin : 20,
        height : 200,
    },
    searchViewText: {
        color : "black",
        textAlign : "center",
        textAlignVertical : "center",
        height: "100%",
        fontSize : 25,
    },

    // 다음 버튼
    nextButtonView:{
        marginBottom : 0,
        height : 50,
        margin : 20,
        marginTop : '80%',
    },
    nextButton : {
        backgroundColor : 'darkgray',
        borderRadius : 20,
    },
    nextButtonText:{
        fontSize : 20,
        width : '100%',
        height : '100%',
        textAlign : 'center',
        textAlignVertical : 'center',
        color: 'black',
    },
})