import {createContext, ReactNode, useContext, useState} from 'react';

export type Reminder = {
  id: number;
  label: string;
  startDate: Date;
  expirationDate: Date;
};

export type Collection = {
  id: number;
  label: string;
  duration: number;
  reminders: Reminder[];
  index: number;
};

type Props = {
  children: ReactNode;
};

type CollectionContextState = {
  collections: Collection[];
  setCollections: (collections: Collection[]) => void;
};

const collectionsTest: Collection[] = [
  {
    index: 1,
    id: 1,
    label: 'Test1',
    duration: 60,
    reminders: [
      {
        id: 1,
        label: 'Faire ahjfsd',
        startDate: new Date(),
        expirationDate: new Date(),
      },
    ],
  },
  {
    index: 2,
    id: 2,
    label: 'Test2',
    duration: 60,
    reminders: [
      {
        id: 1,
        label: 'Faire ahjfsd',
        startDate: new Date(),
        expirationDate: new Date(),
      },
    ],
  },
];

const CollectionInitialState = {
  collections: collectionsTest,
  setCollections: () => {},
};

export const CollectionContext = createContext<CollectionContextState>(
  CollectionInitialState,
);

// const {collections, setCollections} = useContext(CollectionContext);

const CollectionContextProvider = ({children}: Props) => {
  const [collections, setCollections] = useState<Collection[]>(
    CollectionInitialState.collections,
  );

  return (
    <CollectionContext.Provider value={{collections, setCollections}}>
      {children}
    </CollectionContext.Provider>
  );
};
export default CollectionContextProvider;
