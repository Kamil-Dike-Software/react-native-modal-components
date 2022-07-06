import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Prompt from './src/components/Prompt/Prompt';
import Toast from './src/components/Toast/Toast';
import Loading from './src/components/Loading/Loading';

const App = () => {
  const [promptVisible, setPromptVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*PROMPT*/}
      {/*<TouchableOpacity*/}
      {/*  onPress={() => setPromptVisible(true)}*/}
      {/*  style={{flex: 1}}>*/}
      {/*  <Prompt*/}
      {/*    title="test"*/}
      {/*    description="yeees"*/}
      {/*    visibilityState={[promptVisible, setPromptVisible]}*/}
      {/*    onSubmit={console.log}*/}
      {/*    language="PL"*/}
      {/*  />*/}
      {/*</TouchableOpacity>*/}

      {/*TOAST*/}
      {/*<TouchableOpacity*/}
      {/*  onPress={() => setToastVisible(true)}*/}
      {/*  style={{flex: 1, backgroundColor: 'blue'}}>*/}
      {/*  <Toast*/}
      {/*    visibilityState={[toastVisible, setToastVisible]}*/}
      {/*    title="Some test title"*/}
      {/*    message="Some  message"*/}
      {/*  />*/}
      {/*</TouchableOpacity>*/}

      <Loading visible={loadingVisible} language="PL" />
    </View>
  );
};

export default App;
