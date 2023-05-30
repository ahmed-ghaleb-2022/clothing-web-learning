import { createContext, useState, useEffect } from "react";

import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';





export const CategoriesContext = createContext({
    categoryMap:{}
});


export const CategoriesProvider = ({children})=>{
    
    const [categoryMap, setCategoryMap] = useState({})

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoryMap(categoryMap);
        }
        getCategoriesMap();
    },[]);

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // },[]);

    const value = {categoryMap}
    
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}