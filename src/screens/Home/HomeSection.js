import { StyleSheet,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeSection = ()=>{
    return (
        <SafeAreaView>
            <Text style = {styles.sectionText}>홈 섹션</Text>
        </SafeAreaView>
    )
}

export default HomeSection;


const styles = StyleSheet.create({
    sectionText : {
        color : "black",
    }
});