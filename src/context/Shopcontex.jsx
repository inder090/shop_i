import React, { createContext } from 'react'
import all_product from './../components/Assets/all_product';



export const Shopcontext= createContext(null);
const ShopContextProvider = (props)=>{
    const contextvalue= {all_product};
    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>

    )

}
export default ShopContextProvider;