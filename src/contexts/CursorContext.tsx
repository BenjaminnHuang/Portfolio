import { createContext, Dispatch, SetStateAction, useState } from 'react';

export type Variant = {
  variant: string;
};

export interface CursorContextType {
  cursorVariant: Variant;
  cursorBorderVariant: Variant;
  setCursorVariant: Dispatch<SetStateAction<Variant>> | undefined;
  setCursorBorderVariant: Dispatch<SetStateAction<Variant>> | undefined;
}

const defaultState = {
  cursorVariant: { variant: 'default' },
  cursorBorderVariant: { variant: 'default' },
  setCursorVariant: (cursorVariant: Variant) => {},
  setCursorBorderVariant: (cursorBorderVariant: Variant) => {},
} as CursorContextType;

export const CursorContext = createContext(defaultState);

type CursorProviderProps = {
  children: React.ReactNode;
};

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursorVariant, setCursorVariant] = useState<Variant>({
    variant: 'default',
  });

  const [cursorBorderVariant, setCursorBorderVariant] = useState<Variant>({
    variant: 'default',
  });

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        setCursorVariant,
        cursorBorderVariant,
        setCursorBorderVariant,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
