const makeBoldWord = (word: string, size: number) => {
    // slicing word
    const sizeBold = size / 5
    const wordSlice = word.slice(0, Math.round(word.length * sizeBold));

    const lengthWordSlice = wordSlice.length;
    const boldChar = word.substr(0, lengthWordSlice);
    const regularChar = word.substr(0 + lengthWordSlice);

    return `<b>${boldChar}</b>${regularChar}`;
};

export const convert = (originalText: string, size: number) => {
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
                    return makeBoldWord(i, size);
                } else {
                    return "<br /><br />";
                }
            });
        } else {
            newWord = makeBoldWord(word, size);
        }

        newText.push(newWord);
    });

    return newText.join(",").replaceAll(",", " ");
};
