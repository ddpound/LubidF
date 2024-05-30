import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const ProductRegi = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Bottom');
            }}>
            <Text style={styles.headerViewBackButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerViewText}>상품 등록하기</Text>
        </View>
        <View>
          <View style={styles.pictureRegiView}>
            <Text style={styles.viewText}>사진등록 (자유)</Text>
          </View>
          <View style={styles.liveLinkView}>
            <Text style={styles.viewText}>라이브 연결 링크</Text>
          </View>
          <View style={styles.sellInfoName}>
            <Text style={styles.viewText}>판매 상품명</Text>
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.viewText}>상품 설명</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              setSellState(4);
            }}>
            <Text style={styles.nextButtonText}>판매하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductRegi;

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  headerViewText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginLeft: '26%',
  },
  pictureRegiView: {
    backgroundColor: 'gray',
    height: 200,
    margin: 10,
  },
  liveLinkView: {
    backgroundColor: 'gray',
    height: 80,
    margin: 10,
  },
  sellInfoName: {
    backgroundColor: 'darkgray',
    height: 60,
    margin: 10,
  },
  productInfo: {
    backgroundColor: 'darkgray',
    height: 100,
    margin: 10,
  },
  viewText: {
    color: 'black',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  headerViewBackButton: {
    color: 'black',
    fontSize: 25,
    marginLeft: 10,
  },
  // 상품등록 버튼
  nextButton: {
    bottom: 0,
    marginTop: '40%',
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
