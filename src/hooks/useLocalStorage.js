import React, { useEffect } from "react";

function useLocalStorage(itemName, defaultValue = []) {
  let settingValueItem;
  const [item, setItem] = React.useState(defaultValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  useEffect(() => {
   setTimeout(() => {
    try {
      let parsedItems = localStorage.getItem(itemName);
      settingValueItem = parsedItems ? JSON.parse(parsedItems)   : defaultValue;
      setItem(settingValueItem)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log("🚀 ~ error:", error)
    }
   }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage } 