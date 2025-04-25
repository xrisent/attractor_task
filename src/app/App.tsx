import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store, persistor } from './store/store';
import './App.scss';
import { Loader } from '@/shared/ui/Loader/Loader';

function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<Loader/>} 
        persistor={persistor}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 500))}
      >
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;