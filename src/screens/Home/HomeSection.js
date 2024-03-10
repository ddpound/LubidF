import { StyleSheet,Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeSectionCircle from "./HomeSectionComponents/HomeSectionCircle";

const HomeSection = ()=>{
    return (
        <SafeAreaView>
            <View style={styles.bannerContainer}>
                <Text style={styles.sectionTitleText}>Banner</Text>
            </View>
            <View>
                <HomeSectionCircle />
            </View>
            <View>
                <Text style={styles.sectionTitleText}>진행중인 라이브</Text>
            </View>
            <View>
                <Text style={styles.sectionTitleText}>BEST</Text>
            </View>
            <View>
                <Text style={styles.sectionTitleText}>종료 임박한 상품</Text>
            </View>
            <View>
                <Text style={styles.sectionTitleText}>예정된 경매</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.sectionTitleText}>
                    <Text style={styles.sectionTitleText}>위시가 없나요?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeSection;


const styles = StyleSheet.create({
    sectionTitleText : {
        color : "black",
    },
    sectionText : {
        color : "black",
    },
    bannerContainer : {
        height : 200,
        backgroundColor : 'gray',
        justifyContent: "center",
        alignItems: "center",
    },
});