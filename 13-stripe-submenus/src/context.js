import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false)
    const [ location, setLocation ] = useState({})
    const [ page, setPage ] = useState({page:'',links:[]})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    const value = {
        isSidebarOpen,
        isSubmenuOpen,
        location,
        page,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)