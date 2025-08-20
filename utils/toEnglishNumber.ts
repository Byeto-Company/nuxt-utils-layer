const toEnglishNumber = (persianNumberString: string) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let englishNumberString = "";
    for (let i = 0; i < persianNumberString.length; i++) {
        const char = persianNumberString[i];
        const index = persianDigits.indexOf(char);
        if (index !== -1) {
            englishNumberString += englishDigits[index];
        } else {
            englishNumberString += char;
        }
    }
    return englishNumberString;
};

export default toEnglishNumber;
