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

const listInitialState = {
    collections: [],
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