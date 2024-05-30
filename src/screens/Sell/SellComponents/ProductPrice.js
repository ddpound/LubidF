import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ProductPrice = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.pictureAndProductInfo}>
        <View style={styles.pictureView}>
          <Text style={styles.simpleButton}>사진</Text>
        </View>
        <View style={styles.productInfoView}>
          <Text style={styles.simpleButton}>제품정보</Text>
        </View>
      </View>
      <View style={styles.useInfoView}>
        <Text style={styles.simpleButton}>사용정보</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            navigation.navigate('ProductRegi');
          }}>
          <Text style={styles.nextButtonText}>상품 등록하기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductPrice;

const styles = StyleSheet.create({
  pictureAndProductInfo: {
    flexDirection: 'row',
    margin: 10,
  },
  pictureView: {
    width: '30%',
    margin: 5,
    height: 100,
    backgroundColor: 'darkgray',
  },
  productInfoView: {
    width: '65%',
    margin: 5,
    height: 100,
    backgroundColor: 'gray',
  },
  useInfoView: {
    marginLeft: 14,
    marginRight: 14,
    height: 100,
    backgroundColor: 'gray',
  },
  simpleButton: {
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
  // 상품등록 버튼
  nextButton: {
    bottom: 0,
    marginTop: '80%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'gray',
    height: 40,
    borderRadius: 10,
  },
  nextButtonText: {
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
  textBlack: {
    color: 'black',
  },
});
