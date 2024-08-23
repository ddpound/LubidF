import {
  Animated,
  Image,
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
import {useEffect, useRef, useState} from 'react';
import HomeSection from './Home/HomeSection';
import ProductSection from './Home/ProductSection';
import AuctionScheduleSection from './Home/AuctionScheduleSection';
import {useNavigation} from '@react-navigation/native';

const checkJwt = async () => {
  let jwtValue = await JwtStorageData('LubidJwt');
  console.log('homePage', jwtValue);
  return jwtValue;
};

const Home = () => {
  const [pageState, setPageState] = useState(1);
  const [plusButtonContent, setPlusButtonContent] = useState('+');
  const [plusButtonState, setPlusButtonState] = useState(false);

  const navigation = useNavigation();

  const animation = useRef(new Animated.Value(0)).current;

  const buttonTouch = () => {
    setPlusButtonState(!plusButtonState);
  };

  // 애니메이션 적용
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0], // 숨길 때 50px 아래로, 나타날 때 원래 위치로
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // 투명도 변화
  });

  useEffect(() => {
    if (plusButtonState) {
      setPlusButtonContent('-');
    } else {
      setPlusButtonContent('+');
    }

    Animated.timing(animation, {
      toValue: plusButtonState ? 1 : 0,
      duration: 300, // 애니메이션 지속 시간 (밀리초)
      useNativeDriver: true, // 네이티브 드라이버 사용 (퍼포먼스 향상)
    }).start();
  }, [plusButtonState]);

  const goLiveRegisterPage = () => {
    navigation.navigate('LiveRegisterScreen');
  };

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
          {plusButtonState && (
            <>
              <Animated.View style={{transform: [{translateY}], opacity}}>
                <TouchableOpacity
                  style={[
                    styles.absolutePlusMenuButton,
                    styles.absoluteCameraBottonColor,
                  ]}>
                  <Image
                    style={styles.iconStyle}
                    source={require('./../../assets/mainPageIcon/leftBottomIcons/camera-icon.png')}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{transform: [{translateY}], opacity}}>
                <TouchableOpacity
                  style={[
                    styles.absolutePlusMenuButton,
                    styles.absolutePencilButtonColor,
                  ]}
                  onPress={goLiveRegisterPage}>
                  <Image
                    style={styles.iconStyle}
                    source={require('./../../assets/mainPageIcon/leftBottomIcons/pencil-icon.png')}
                  />
                </TouchableOpacity>
              </Animated.View>
            </>
          )}

          <TouchableOpacity
            style={styles.absolutePlusMenuButton}
            onPress={buttonTouch}>
            <Text style={styles.plusMinusText}>{plusButtonContent}</Text>
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
    padding: 10,
    borderRadius: 5,
    zIndex: 999,
  },
  absolutePlusMenuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D5D5D5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteCameraBottonColor: {
    backgroundColor: '#FFA7A7',
    marginBottom: 6,
  },
  absolutePencilButtonColor: {
    backgroundColor: '#ABF200',
    marginBottom: 6,
  },
  buttonText: {
    color: 'white',
  },
  iconStyle: {
    width: '60%',
    resizeMode: 'contain',
  },
  plusMinusText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});
