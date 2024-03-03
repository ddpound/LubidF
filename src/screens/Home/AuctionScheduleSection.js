import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuctionScheduleSection = ()=>{
    return (
        <SafeAreaView>
            <Text style = {styles.sectionText}>경매일정 섹션</Text>
        </SafeAreaView>
    )
}

export default AuctionScheduleSection;

const styles = StyleSheet.create({
    sectionText : {
        color : "black",
    }
});