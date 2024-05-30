import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonViewBox from '../../components/Common/CommonViewBox';
import {useState} from 'react';

const ProductSection = () => {
  const [buttonState, setButtonState] = useState(0);
  return (
    <SafeAreaView>
      <View style={styles.sectionTitleView}>
        <Text style={styles.sectionTitleText}>진행 중인 라이브 상품</Text>
      </View>
      <View style={styles.viewBoxList}>
        <CommonViewBox />
        <CommonViewBox />
      </View>
      <View style={styles.sectionTitleView}>
        <Text style={styles.sectionTitleText}>종료 임박한 상품</Text>
      </View>
      <View style={styles.viewBoxList}>
        <CommonViewBox />
        <CommonViewBox />
      </View>
      <View style={styles.sectionTitleView}>
        <TouchableOpacity
          style={
            buttonState == 0 ? styles.topMenuButtonPoint : styles.topMenuButton
          }
          onPress={() => {
            setButtonState(0);
          }}>
          <Text style={[styles.sectionTitleText, styles.sectionTitleCenter]}>
            BEST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            buttonState == 1 ? styles.topMenuButtonPoint : styles.topMenuButton
          }
          onPress={() => {
            setButtonState(1);
          }}>
          <Text style={[styles.sectionTitleText, styles.sectionTitleCenter]}>
            NEW
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBoxList}>
        <CommonViewBox />
        <CommonViewBox />
      </View>
      <View style={styles.viewBoxList}>
        <CommonViewBox />
        <CommonViewBox />
      </View>
    </SafeAreaView>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  sectionTitleView: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    flexDirection: 'row',
  },
  sectionTitleCenter: {
    textAlign: 'center',
  },
  sectionTitleText: {
    color: 'black',
    fontSize: 20,
  },
  // 오른쪽 드래그 박스리스트
  viewBoxList: {
    flexDirection: 'row',
  },
  topMenuButton: {
    width: '20%',
  },
  topMenuButtonPoint: {
    width: '20%',
    backgroundColor: 'gray',
  },
});
