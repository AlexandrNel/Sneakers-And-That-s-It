export function generateSlug(text: string) {
    return text.toLowerCase().split(' ').join('-')
}