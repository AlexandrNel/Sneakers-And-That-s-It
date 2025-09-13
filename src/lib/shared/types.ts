export type WithElementRef<T> = T & {
    ref?: HTMLElement | null;
};