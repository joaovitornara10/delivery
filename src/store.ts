import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProducType } from "@/types/ProductTypes";

type CartStote = {
    cart: ProducType[];
    addProduct: (product: ProducType) => void;
    removeProhuct: (product: ProducType) => void;
    isOpenCart: boolean;
    isOpenComplement: boolean;
    toggleCart: () => void;
    toggleComplement: () => void;
}
export const useCartStore = create<CartStote>()(
    persist(
        (set) => ({
            cart: [],
            addProduct: (item) =>
                set((state) => {
                    const product = state.cart.find((p) => p.id === item.id);
                    if (product) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id === item.id) {
                                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
                            }
                            return p;
                        });
                        return { cart: updatedCart };
                    } else {
                        return { cart: [...state.cart, { ...item, quantity: 1 }] }
                    }
                }),
            removeProhuct: (item) =>
                set((state) => {
                    const existingProduct = state.cart.find((p) => p.id === item.id);
                    if (existingProduct && existingProduct.quantity! > 1) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id === item.id) {
                                return { ...p, quantity: p.quantity! - 1 };
                            }
                            return p;
                        });
                        return { cart: updatedCart };
                    } else {
                        const filterdCart = state.cart.filter((p) => p.id !== item.id)
                        return { cart: filterdCart }
                    }
                }),
            isOpenCart: false,
            isOpenComplement: false,
            toggleCart: () => set((state) => ({ isOpenCart: !state.isOpenCart })),
            toggleComplement: () => set((state) => ({ isOpenComplement: !state.isOpenComplement })),
        }),
        { name: 'cart-storage' }
    )
)