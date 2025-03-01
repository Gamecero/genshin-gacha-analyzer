import React, { useEffect, useMemo, useRef, useState, FC, useContext } from 'react';
import { WorkBook } from 'xlsx/types';

type GlobalContextType = {
  workbook: WorkBook | null;
  isVertical: boolean;
  updateWorkbook: (workbook: WorkBook) => void;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  workbook: null,
  isVertical: false,
  updateWorkbook: (() => {}) as any,
});

// 获取尺寸信息
function getInfo() {
  const clientWidth = document.body.clientWidth;
  const clientHeight = document.body.clientHeight;
  return {
    clientWidth,
    clientHeight,
    isVertical: clientHeight > clientWidth,
  };
}
export const useGlobalContext = function () {
  return useContext(GlobalContext);
};

export const GlobalContextProvider: FC<{}> = function ({ children }) {
  const [workbook, setWorkbook] = useState<WorkBook | null>(null);
  const initInfo = useMemo(() => getInfo(), []);
  const [isVertical, setVertical] = useState(initInfo.isVertical);
  const isVerticalRef = useRef<boolean>(isVertical);
  useEffect(() => {
    isVerticalRef.current = isVertical;
  }, [isVertical]);
  useEffect(() => {
    function resize() {
      const { isVertical: nowIsVertical } = getInfo();
      if (nowIsVertical !== isVerticalRef.current) setVertical(nowIsVertical);
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  const value = useMemo(() => {
    return {
      workbook: workbook,
      updateWorkbook: setWorkbook,
      isVertical,
    };
  }, [isVertical, workbook]);
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
