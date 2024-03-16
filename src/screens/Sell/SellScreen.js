import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';

const SellScreen = ()=>{
   
    return (
        <SafeAreaView>
            <View style={styles.headerView}>
                <TouchableOpacity>
                    <Text style={styles.headerViewBackButton}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.headerViewText}>판매하기</Text>
            </View>
            <View style={styles.sellerTopView}>
                <View style={styles.topViewChildView}>
                    <Text style={styles.topViewChildViewText}>
                        제품선택
                    </Text>
                </View>
                <View style={styles.topViewChildView}>
                    <Text style={styles.topViewChildViewText}>
                        사용정보
                    </Text>
                </View>
                <View style={styles.topViewChildView}>
                    <Text style={styles.topViewChildViewText}>
                        가격측정
                    </Text>
                </View>
            </View>
            <View>
                <Collapse>
                    <CollapseHeader>
                        <Text>FORWARD</Text>
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>FORWARD</Text>
                    </CollapseBody>
                </Collapse>
                <Collapse>
                    <CollapseHeader>
                        <Text>FORWARD</Text>
                    </CollapseHeader>
                    <CollapseBody>
                        <Text>Aaron Bennet</Text>
                        <Text>Claire Barclay</Text>
                        <Text>Kelso Brittany</Text>
                    </CollapseBody>
                </Collapse>
            </View>
        </SafeAreaView>
    )
}

export default SellScreen;

const styles = StyleSheet.create({
    headerView : {
        width : '100%',
        marginTop: 10,
        flexDirection : 'row',
    },
    headerViewText:{
        color:'black',
        fontSize: 25,
        textAlign: 'center',
        marginLeft: '33%',
    },
    headerViewBackButton:{
        color : 'black',
        fontSize: 25,
        marginLeft: 10,
    },
    mainText : {
        color : "black",
    },
    // 제품선택, 사용정보, 가격 측정 view
    sellerTopView : {
        height: 100,
        flexDirection: 'row',
        backgroundColor : 'gray',
    },
    topViewChildView :{
        width : '22%',
        height: 80,
        backgroundColor : 'white',
        borderRadius : 100,
        marginTop : 10,
        marginRight : 22,
        marginLeft: 18,
    },
    topViewChildViewText :{
        color : 'black',
        textAlign : 'center',
        textAlignVertical: 'center',
        height : '100%',
    },
})