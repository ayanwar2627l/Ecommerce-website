import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);
    const [saveForLater, setSaveForLater] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const savedForLater = JSON.parse(localStorage.getItem("saveForLater")) || [];
        setWishlist(savedWishlist);
        setSaveForLater(savedForLater);
    }, []);

    // Sync wishlist to localStorage
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Sync saveForLater to localStorage
    useEffect(() => {
        localStorage.setItem("saveForLater", JSON.stringify(saveForLater));
    }, [saveForLater]);

    // Wishlist functions
    const addToWishlist = (product) => {
        const exists = wishlist.some((item) => item.id === product.id);
        if (!exists) {
            setWishlist([...wishlist, product]);
            return true;
        }
        return false;
    };

    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlist.some((item) => item.id === productId);
    };

    // Save for Later functions
    const addToSaveForLater = (product) => {
        const exists = saveForLater.some((item) => item.id === product.id);
        if (!exists) {
            setSaveForLater([...saveForLater, product]);
            return true;
        }
        return false;
    };

    const removeFromSaveForLater = (productId) => {
        setSaveForLater(saveForLater.filter((item) => item.id !== productId));
    };

    const isInSaveForLater = (productId) => {
        return saveForLater.some((item) => item.id === productId);
    };

    const moveToWishlist = (productId) => {
        const item = saveForLater.find((item) => item.id === productId);
        if (item) {
            addToWishlist(item);
            removeFromSaveForLater(productId);
        }
    };

    const moveToSaveForLater = (productId) => {
        const item = wishlist.find((item) => item.id === productId);
        if (item) {
            addToSaveForLater(item);
            removeFromWishlist(productId);
        }
    };

    const value = {
        wishlist,
        saveForLater,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToSaveForLater,
        removeFromSaveForLater,
        isInSaveForLater,
        moveToWishlist,
        moveToSaveForLater,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within WishlistProvider");
    }
    return context;
}
