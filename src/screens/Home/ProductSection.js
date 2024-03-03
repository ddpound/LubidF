import { StyleSheet,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductSection = ()=>{
    return (
        <SafeAreaView>
            <Text style = {styles.sectionText}>제품 섹션</Text>
        </SafeAreaView>
    )
}

export default ProductSection;


const styles = StyleSheet.create({
    sectionText : {
        color : "black",
    }
});