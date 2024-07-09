function solution(s) {
    return s.split('').map((char, index) => {
        for (let i = index - 1; i >= 0; i--) {
            if (s[i] === char) {
                return index - i;
            }
        }
        return -1;
    });
}