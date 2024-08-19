import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeSectionCircle from './HomeSectionComponents/HomeSectionCircle';
import CommonViewBox from '../../components/Common/CommonViewBox';
import {useEffect, useRef} from 'react';

const HomeSection = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = event => {
    console.log('test', event);
  };

  const buttonTranslateY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1], // 스크롤에 따라 위치 조정
    extrapolate: 'clamp',
  });

  useEffect(() => {
    console.log(buttonTranslateY);
  }, [buttonTranslateY]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
        scrollEventThrottle={0.5}>
        <View style={styles.bannerContainer}>
          <Text style={styles.sectionTitleText}>Banner</Text>
        </View>
        <View>
          <HomeSectionCircle />
        </View>
        <View style={styles.sectionTitleView}>
          <Text style={styles.sectionTitleText}>진행중인 라이브</Text>
        </View>
        <View style={styles.viewBoxList}>
          <CommonViewBox />
          <CommonViewBox />
        </View>
        <View style={styles.sectionTitleView}>
          <Text style={styles.sectionTitleText}>BEST</Text>
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
          <Text style={styles.sectionTitleText}>예정된 경매</Text>
        </View>
        <View style={styles.viewBoxList}>
          <CommonViewBox />
          <CommonViewBox />
        </View>
        <View style={styles.sectionTitleView}>
          <TouchableOpacity style={styles.wishButton}>
            <Text style={styles.wishButtonText}>위시가 없나요?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fixedBox}>
          <TouchableOpacity style={styles.absolutePlusMenuButton}>
            <Text style={styles.wishButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            styles.button,
            {transform: [{translateY: buttonTranslateY}]},
          ]}>
          <Text style={styles.buttonText}>Scroll Following Button</Text>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
    flexGrow: 1,
    paddingBottom: 100, // 버튼과 콘텐츠가 겹치지 않도록 여유 공간 추가
  },
  sectionTitleView: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
  },
  sectionTitleText: {
    color: 'black',
    fontSize: 20,
  },
  bannerContainer: {
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBoxList: {
    flexDirection: 'row',
  },
  wishButton: {
    width: '90%',
    height: 50,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  wishButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 23,
    fontWeight: '400',
    marginTop: 10,
  },
  fixedBox: {
    position: 'absolute', // absolute 위치 지정
    bottom: 10, // 화면의 하단에서 10px
    right: 10, // 화면의 오른쪽에서 10px
    backgroundColor: 'blue',
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
