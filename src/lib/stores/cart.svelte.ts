import type { ICard } from "$lib/consts/cards"
type CartItem<T> = {
    item: T,
    count: number
}

export const cartStore = $state<{ items: CartItem<ICard>[], count: number }>(
    {
        items: [],
        count: 0
    }
)

export function addToCart(product: ICard) {
    const existed = cartStore.items.find((p) => p.item.id === product.id)
    if (existed) {
        existed.count++
    } else {
        cartStore.items.push({ item: product, count: 1 })
    }
    cartStore.count += 1
}
export function setCartStore(c: typeof cartStore) {
    cartStore.items = c.items
    cartStore.count = c.count
}
export function getCountById(id: string) {
    return cartStore.items.find((p) => p.item.id === id)?.count ?? 0
}
export function deleteFromCart(id: string) {
    cartStore.items = cartStore.items.filter((p) => {
        if (p.item.id === id) {
            cartStore.count -= p.count
            return false
        } else return true
    })
}

function cashDeleteFunc(fn: (product?: CartItem<ICard>) => void) {
    const cache: Record<string, unknown> = {}
    return (id: string) => {
        let product: CartItem<ICard> | undefined;

        if (id in cache) {
            product = cache[id] as CartItem<ICard>;
        } else {
            product = cartStore.items.find(p => p.item.id === id);
            cache[id] = product;
        }

        fn(product);

        if (!cartStore.items.find(p => p.item.id === id)) {
            delete cache[id];
        }
    }

}

function deleteFromCartByOne(product?: CartItem<ICard>) {
    if (product) {
        if (product.count > 1) {
            product.count -= 1
            cartStore.count -= 1
        }
        else {
            cartStore.items = cartStore.items.filter((p) => product.item.id !== p.item.id)
            cartStore.count -= 1
        }
    }
}
export const cashedDeleteByOne = cashDeleteFunc(deleteFromCartByOne)