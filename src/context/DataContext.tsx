import React, {useState} from 'react';
import { Category } from '../types/Category';
import {ContextProps} from "../types/ContextProps";

type DataContextType = {
    categoryList: Category[],
    setCategoryList: (catList: Category[]) => void
}
export const DataContext = React.createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: ContextProps) => {
    const [categoryList, setCategoryList] = useState<Category[]>([]);

    return <DataContext.Provider value={{
        categoryList,
        setCategoryList
    }}>
        {children}
    </DataContext.Provider >
}
