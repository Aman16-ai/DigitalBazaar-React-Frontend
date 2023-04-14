
export function trunchatesChar(word,n) {
    if(word.length <= n) return word
    else {
        const new_word = word.substring(0,n) + "...";
        return new_word
    }
}