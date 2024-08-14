import { createContext, ReactNode, useContext, useState } from "react";

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
    children: ReactNode
}

type ListContextState = {
    collections: Collection[],
    setCollections: (collections: Collection[]) => void,
}

const collectionsTest:Collection[] = [
    {index: 1, id:1, label: "Test1", duration: 60, reminders: [{id: 1, label: "Faire ahjfsd", startDate: new Date(), expirationDate: new Date()}]},
    {index: 2, id:2, label: "Test2", duration: 60, reminders: [{id: 1, label: "Faire ahjfsd", startDate: new Date(), expirationDate: new Date()}]}
]

const listInitialState = {
    collections: collectionsTest,
    setCollections: ()=>{},
}


export const ListContext = createContext<ListContextState>(listInitialState);

// const {collections, setCollections} = useContext(ListContext);

const ListContextProvider = ({children}: Props) => {
    const [collections, setCollections] = useState<Collection[]>(listInitialState.collections);

    return (
        <ListContext.Provider
            value ={{collections, setCollections}}
        >
        {children}
        </ListContext.Provider>
        )
}
export default ListContextProvider