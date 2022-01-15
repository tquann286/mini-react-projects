import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const value = {
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal
    }

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
}

// custom hook: must begin with use...
export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }