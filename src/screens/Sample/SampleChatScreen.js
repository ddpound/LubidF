import axios from 'axios';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EventSource from 'react-native-sse';

/**
 * 채팅 샘플을 위한 Screen
 *
 * @returns safeAreaView
 *
 */
const SampleChatScreen = () => {
  const sampleUri = 'http://116.32.208.215:7777/lubid-live/auth/sample';

  const makeRoom = () => {
    axios
      .post(
        sampleUri + '/make-room',
        {
          id: 1,
          roomNum: 1,
          rommTitle: 'test',
          videoUrl: '',
          thumbnail: '',
          chiefId: 1,
          chief: '1',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Connection: 'keep-alive',
          },
          withCredentials: true,
        },
      )
      .then(function (response) {
        console.log(response);
      });
  };

  const sendMessage = () => {
    console.log('send message');

    axios
      .post(
        sampleUri + '/send-message',
        {
          msg: 'test',
          sender: 'testUser',
          receiver: '2',
          profile: '1',
          roomNum: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Connection: 'keep-alive',
          },
          withCredentials: true,
        },
      )
      .then(function (response) {
        console.log(response.data);
      });
  };

  const requestRoom = () => {
    console.log('request room');

    const eventSource = new EventSource(sampleUri + '/live/request-room/1');

    eventSource.addEventListener('open', event => {
      console.log('Open SSE connection.');
    });

    eventSource.addEventListener('message', event => {
      console.log('New message event:', event.data);
    });

    eventSource.addEventListener('error', event => {
      if (event.type === 'error') {
        console.error('Connection error:', event.message);
      } else if (event.type === 'exception') {
        console.error('Error:', event.message, event.error);
      }
    });

    // Clean up the connection when the component unmounts
    return () => {
      eventSource.close();
      console.log('SSE connection closed.');
    };
  };

  const testRequestSse = () => {
    console.log('request test sse');

    const eventSource = new EventSource(sampleUri + '/live/test');

    eventSource.addEventListener('open', event => {
      console.log('Open SSE connection.');
    });

    eventSource.addEventListener('message', event => {
      console.log('New message event:', event.data);
    });

    eventSource.addEventListener('error', event => {
      if (event.type === 'error') {
        console.error('Connection error:', event.message);
      } else if (event.type === 'exception') {
        console.error('Error:', event.message, event.error);
      }
    });

    // Clean up the connection when the component unmounts
    return () => {
      eventSource.close();
      console.log('SSE connection closed.');
    };
  };

  const closeRoom = () => {
    console.log('try close room');
    const eventSource = new EventSource(sampleUri + '/live/request-room/1');
    eventSource.addEventListener('close', event => {
      console.log('Close SSE connection.');
    });
    eventSource.close(); // Close the SSE connection
  };

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>샘플 페이지</Text>
      </View>
      <View style={styles.mainBody}>
        <Text> 샘플</Text>
        <Text> 샘플2 </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          testRequestSse();
        }}>
        <Text style={styles.buttonText}>연결테스트</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          requestRoom();
        }}>
        <Text style={styles.buttonText}>방 연결하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          closeRoom();
        }}>
        <Text style={styles.buttonText}>방 연결끊기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          makeRoom();
        }}>
        <Text style={styles.buttonText}>방 만들기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          sendMessage();
        }}>
        <Text style={styles.buttonText}>샘플 전송</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'gray',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '5%',
  },
  headerView: {
    height: 40,
    backgroundColor: 'white',
  },
  headerViewText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
  },
  titleText: {
    color: 'black',
  },
  mainBody: {
    margin: 5,
  },
});

export default SampleChatScreen;
