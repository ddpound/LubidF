import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
        <View>
          <Text>바로 로드되는지 체크</Text>
          <Text>루비드 프로젝트</Text>
        </View>
      
    </SafeAreaView>
  );
}

export default App;
