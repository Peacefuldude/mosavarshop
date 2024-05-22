export function sliceFunc(item: string) {
    const result = item.toString().slice(0, 8);

    return result;
}

export function sliceAll(item: any) {
    const result = item.slice(0, 20);

    return result;
}
