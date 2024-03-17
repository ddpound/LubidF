import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ProductChoise from "./SellComponents/ProductChoice";
import { useState } from "react";
import ProductUseInfo from "./SellComponents/ProductUseInfo";
import ProductPrice from "./SellComponents/ProductPrice";
import ProductRegi from "./SellComponents/ProductRegi";

const SellScreen = ()=>{
    const [sellState , setSellState] = useState(1);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.headerView}>
                    <TouchableOpacity 
                        onPress={()=>{
                            if(sellState > 1){
                                setSellState(sellState - 1);
                            }
                         }}>
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
                {
                    sellState == 1 && <ProductChoise setSellState={setSellState} />
                }
                {
                    sellState == 2 && <ProductUseInfo setSellState={setSellState} />
                }
                {
                    sellState == 3 && <ProductPrice setSellState={setSellState} />
                }
                {
                    sellState == 4 && <ProductRegi/>
                }
            </ScrollView>
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
});