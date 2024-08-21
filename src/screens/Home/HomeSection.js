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
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
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
});
