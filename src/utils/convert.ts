const makeBoldWord = (word: string) => {
    // detect odd even word to determine size
    const sizeBold = word.length % 2 === 0 ? 1/2 : 2/3;
    // slicing word
    const wordSlice = word.slice(0, Math.floor(word.length * sizeBold));

    const lengthWordSlice = wordSlice.length;
    const boldChar = word.substr(0, lengthWordSlice);
    const regularChar = word.substr(0 + lengthWordSlice);

    return `<b>${boldChar}</b>${regularChar}`;
};

export const convert = (originalText: string) => {
    const newText: Array<any> = [];

    const splitOriginalText = originalText.split(" ");
    splitOriginalText.map((word: string) => {
        let newWord;

        const isNewLine = /\n/.exec(word);

        // word with newline characters
        if (isNewLine) {
            // break down the words
            let words = word.split("\n");
            newWord = words.map((i) => {
                // word without newline character
                if (i.length > 0) {
                    return makeBoldWord(i);
                } else {
                    return "<br /><br />";
                }
            });
        } else {
            newWord = makeBoldWord(word);
        }
        
        newText.push(newWord);
    });

    return newText.join(",").replaceAll(",", " ");
};
