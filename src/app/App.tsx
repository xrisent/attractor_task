import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store, persistor } from './store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<div>Loading...</div>} 
        persistor={persistor}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 500))}
      >
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;