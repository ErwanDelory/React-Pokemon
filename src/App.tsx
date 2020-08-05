import React, { FunctionComponent, useState} from 'react';

//const App: React.FC
const App: FunctionComponent = () => {
  //const name: String = 'React';
  const [name, setName] = useState('React');

  return (
    <h1>Hello, { name } !</h1>
  )
}

export default App; 