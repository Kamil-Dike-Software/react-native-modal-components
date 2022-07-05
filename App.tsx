import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Prompt from './src/Prompt/Prompt';
import Toast from './src/Toast/Toast';

const App = () => {
  const [promptVisible, setPromptVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity
        onPress={() => setPromptVisible(true)}
        style={{flex: 1}}>
        <Prompt
          title="test"
          description="yeees"
          visibilityState={[promptVisible, setPromptVisible]}
          onSubmit={console.log}
          language="PL"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setToastVisible(true)}
        style={{flex: 1, backgroundColor: 'blue'}}>
        <Toast
          visibilityState={[toastVisible, setToastVisible]}
          title="Some test title"
          message="Some  message"
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
