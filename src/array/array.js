export const chunk = (array, size = 1) => {
    const chunkedArray = []
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size))
    }
    return chunkedArray
}
