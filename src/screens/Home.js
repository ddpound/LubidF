import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  JwtSotrageCheck,
  JwtStorageSet,
  JwtStorageData,
} from '../components/AsyncData/JwtAsyncData';
import {useState} from 'react';
import HomeSection from './Home/HomeSection';
import ProductSection from './Home/ProductSection';
import AuctionScheduleSection from './Home/AuctionScheduleSection';

const checkJwt = async () => {
  let jwtValue = await JwtStorageData('LubidJwt');
  console.log('homePage', jwtValue);
  return jwtValue;
};

const Home = () => {
  const [pageState, setPageState] = useState(1);

  return (
    <>
      <View style={styles.releativeContainer}>
        <ScrollView style={styles.homeMainContainer}>
          <SafeAreaView>
            <View style={styles.mainPageHeader}>
              <Text style={styles.headerText}>L U B I D</Text>
            </View>
            <View style={styles.menuBarContainer}>
              <TouchableOpacity
                style={
                  pageState == 1
                    ? styles.topMenuButtonPoint
                    : styles.topMenuButton
                }
                onPress={() => {
                  setPageState(1);
                }}>
                <Text style={styles.topMenuButtonText}>홈</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  pageState == 2
                    ? styles.topMenuButtonPoint
                    : styles.topMenuButton
                }
                onPress={() => {
                  setPageState(2);
                }}>
                <Text style={styles.topMenuButtonText}>상품</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  pageState == 3
                    ? styles.topMenuButtonPoint
                    : styles.topMenuButton
                }
                onPress={() => {
                  setPageState(3);
                }}>
                <Text style={styles.topMenuButtonText}>경매일정</Text>
              </TouchableOpacity>
            </View>
            {pageState == 1 && <HomeSection />}
            {pageState == 2 && <ProductSection />}
            {pageState == 3 && <AuctionScheduleSection />}
          </SafeAreaView>
        </ScrollView>
        <View style={styles.fixedBox}>
          <TouchableOpacity style={styles.absolutePlusMenuButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  releativeContainer: {
    maxHeight: '100%',
    position: 'relative',
  },
  mainPageHeader: {
    borderBottomColor: 'black',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    margin: 15,
  },
  menuBarContainer: {
    color: 'black',
    flexDirection: 'row',
  },
  bodyView: {
    color: 'black',
  },
  menuText: {
    color: 'black',
    margin: 10,
    fontSize: 18,
  },
  topMenuButton: {
    width: '25%',
  },
  topMenuButtonPoint: {
    width: '25%',
    backgroundColor: 'gray',
  },
  topMenuButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  fixedBox: {
    position: 'absolute', // absolute 위치 지정
    bottom: 10, // 화면의 하단에서 10px
    right: 10, // 화면의 오른쪽에서 10px
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    zIndex: 999,
  },
  absolutePlusMenuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
