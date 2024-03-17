import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

const ProductUseInfo = ({setSellState})=>{
    return (
        <>
            <ScrollView>
                <Collapse style={[styles.bottomBorderBlack]}>
                    <CollapseHeader>
                        <Text style={styles.sellerCommonHeaderText}>구성품</Text>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBody}>
                        <Text style={styles.textBlack}>구성품1</Text>
                    </CollapseBody>
                </Collapse>
                <Collapse style={[styles.bottomBorderBlack]}>
                    <CollapseHeader>
                        <Text style={styles.sellerCommonHeaderText}>구매시기</Text>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBody}>
                        <Text style={styles.textBlack}>구매시기1</Text>
                        <Text style={styles.textBlack}>구매시기2</Text>
                        <Text style={styles.textBlack}>구매시기3</Text>
                    </CollapseBody>
                </Collapse>
                <Collapse style={[styles.bottomBorderBlack]}>
                    <CollapseHeader>
                        <Text style={styles.sellerCommonHeaderText}>사용등급</Text>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBody}>
                        <Text style={styles.textBlack}>사용등급1</Text>
                        <Text style={styles.textBlack}>사용등급2</Text>
                        <Text style={styles.textBlack}>사용등급3</Text>
                    </CollapseBody>
                </Collapse>
                <View>
                    <TouchableOpacity 
                        style={styles.nextButton} 
                        onPress={()=>{setSellState(3)}}>
                        <Text style={styles.nextButtonText}>다음</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default ProductUseInfo;

const styles = StyleSheet.create({
    sellerCommonHeaderText:{
        color:'black',
        fontSize: 20,
        margin : 20,
    },
    bottomBorderBlack : {
        borderBottomColor : 'black',
        borderBottomWidth : 1,
    },
    collapseBody : {
        margin : 20,
    },
    // 마지막 다음 버튼
    nextButton : {
        bottom : 0,
        marginTop : '50%',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor : 'gray',
        height : 40,
        borderRadius : 10,
    },
    nextButtonText :{
        color : 'black',
        textAlign:'center',
        textAlignVertical : 'center',
        height : '100%',
    },
    textBlack : {
        color : 'black',
    }
});