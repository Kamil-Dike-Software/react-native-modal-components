import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Toast from './src/Toast/Toast';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setVisible(true)} style={{flex: 0.5}}>
      <Toast visibilityState={[visible, setVisible]} title="Some test title" />
    </TouchableOpacity>
  );
};

export default App;
