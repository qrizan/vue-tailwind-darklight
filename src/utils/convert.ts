const makeBoldWord = (word: string, wordSlice: string) => {
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

        // detect odd even word to determine size
        const sizeBold = word.length % 2 ? 1 / 2 : 2 / 3;

        const isNewLine = /\n/.exec(word);

        // word with newline characters
        if (isNewLine) {
            // break down the words
            let words = word.split("\n");
            newWord = words.map((i) => {
                // word without newline character
                if (i.length > 0) {
                    const iSlice = i.slice(0, Math.floor(i.length * sizeBold));
                    return makeBoldWord(i, iSlice);
                } else {
                    return "<br /><br />";
                }
            });
        } else {
            const wordSlice = word.slice(0, Math.floor(word.length * sizeBold));
            newWord = makeBoldWord(word, wordSlice);
        }
        
        newText.push(newWord);
    });

    return newText.join(",").replaceAll(",", " ");
};
