import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

const Home = ({navigation, route}) => {
  const coreApi = route.params?.coreApi;
  const [isEmulator, setIsEmulator] = React.useState(null);
  const [time, setTime] = React.useState(moment().format('h:mm:ss a'));
  const updateTime = React.useCallback(() => moment().format('h:mm:ss a'), []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [time, updateTime]);

  const doIsEmulator = React.useCallback(async () => {
    const result = await coreApi.deviceInfo.isEmulator();
    setIsEmulator(result);
  }, [coreApi.deviceInfo]);

  React.useEffect(() => {
    doIsEmulator();
  }, [doIsEmulator, isEmulator]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{marginBottom: 40}}>{time}</Text>

      <Text style={{marginBottom: 40}}>isEmulator: {String(isEmulator)} </Text>

      <Text style={{marginBottom: 40}}>
        device Id: {String(coreApi.deviceInfo.getDeviceId())}{' '}
      </Text>

      <Text>MODULE HOME SCREEN</Text>

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: '60%',
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={() => {
          coreApi.miniAppProfile().components[0].methods[0].fn();
        }}>
        <Text>CALL METHOD PROFILE </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 100,
          backgroundColor: 'green',
          width: '60%',
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Profile', {customer_id: 12345})}>
        <Text>GO TO PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
