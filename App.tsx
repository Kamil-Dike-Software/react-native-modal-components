import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import Prompt from './src/components/Prompt/Prompt';
import Toast from './src/components/Toast/Toast';
import Loading from './src/components/Loading/Loading';
import {ContainerStyles} from './src/styles/ContainerStyles';

const App = () => {
  const [promptVisible, setPromptVisible] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [loadingVisible] = useState(false);

  return (
    <ImageBackground
      source={require('./src/background.jpg')}
      style={ContainerStyles.screen}>
      {/*PROMPT*/}
      <Prompt
        title="test"
        description="yeees"
        visibilityState={[promptVisible, setPromptVisible]}
        onSubmit={console.log}
        language="PL"
        placeholder="test"
      />
      {/*TOAST*/}
      <Toast
        visibilityState={[toastVisible, setToastVisible]}
        title="Some test title"
      />
      {/*LOADING*/}
      <Loading visible={loadingVisible} />
    </ImageBackground>
  );
};

export default App;
