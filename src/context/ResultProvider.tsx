import { createContext, useState } from 'react';
export const ResultContext = createContext({
  result: false,
  showResult: () => {},
  hideResult: () => {},
});

const ResultProvider = ({children}: { children: React.ReactNode }) => {
  const [result, setResult] = useState(false);

  const showResult = () => setResult(true);

  const hideResult = () => setResult(false);

  return (
    <ResultContext.Provider value={{ result, showResult, hideResult }}>
      {children}
    </ResultContext.Provider>
  );
};
export default ResultProvider;