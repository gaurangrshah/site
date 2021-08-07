import {
  useCallback,
  useContext,
  createContext,
  useEffect,
  useState,
} from 'react';
const LocalDataStateContext = createContext();
const LocalDataDispatchContext = createContext();
import appConfig from '../app.config';

const key = 'options';
console.log('options', appConfig);

export function LocalDataProvider({ children }) {
  const [localData, setLocalStorage] = useState(() => appConfig?.options || '');

  const [initialized, setInitialized] = useState({});

  useEffect(() => {
    if (!appConfig && !Object.keys(appConfig?.length)) return children;
  }, []);

  useEffect(() => {
    const localDb = window.localStorage.getItem(key);
    const obj = localDb ? JSON.parse(localDb) : null;

    if (obj && Object.keys(obj).length) {
      setLocalData(obj);
    } else {
      window.localStorage.setItem(key, JSON.stringify(appConfig?.options));
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      window.localStorage.setItem(key, JSON.stringify(localData));
    }
  }, [localData]);

  function setLocalData(value) {
    setLocalStorage({
      ...localData,
      ...value,
    });
  }

  return (
    <LocalDataStateContext.Provider value={{ localData }}>
      <LocalDataDispatchContext.Provider value={{ setLocalData }}>
        {children}
      </LocalDataDispatchContext.Provider>
    </LocalDataStateContext.Provider>
  );
}

export const useLocalDataState = (key = 'localData') => {
  const context = useContext(LocalDataStateContext);
  if (context === undefined) {
    throw new Error(
      'useLocalDataState must be used within a LocalDataProvider'
    );
  }
  return context;
};

export const useLocalDataDispatch = (key = 'localData') => {
  const context = useContext(LocalDataDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useLocalDataDispatch must be used within a LocalDataProvider'
    );
  }
  return context;
};
