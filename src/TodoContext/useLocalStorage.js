import React from "react";

function useLocalStorage(itemName, initialValue) {

    // Estado inicial de los objetos devueltos por la función
    const [error, setErr] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    
    // This executes stuff just before our component is rendered
    // If we need to execute stuff just after a component renders we should useLayoutEffect
    // useEffect has two parameters. 
    //  * 1 effect: A function to execute as the effect
    //  * 2 depts: An array. Si se proporciona, useEffect se activa solo si los objetos del array cambian
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem){
            parsedItem = initialValue
            localStorage.setItem(itemName,JSON.stringify(initialValue))
          } else {
            parsedItem = JSON.parse(localStorageItem);  
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setErr(error);
        }
        
      }, 3000);
    });
  
    const saveItem = (newTodos) => {
      try {
        const stringifiedItem = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newTodos)
      } catch (error) {
        setErr(error)
      }
      
    };
  
    // The hook returns pointers to those objects.
    // First, those objects' values are the initial values defined at the begining of the hook
    // When the fake API call gets a response, the object's values are updated
    return {item, saveItem, loading, error}
  
  }

export { useLocalStorage };