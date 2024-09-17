/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number: number): number => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number => {
        const parsed = parseInt(str, 10);
        if (isNaN(parsed)) {
            return 0;
        } else {
            return parsed;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        const removed$ = amount.replace(/^\$/, "");
        const parsed = parseInt(removed$, 10);

        if (isNaN(parsed)) {
            return 0;
        } else {
            return parsed;
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages.reduce((result: string[], message: string) => {
        if (message.endsWith("?")) {
            return result;
        } else if (message.endsWith("!")) {
            result.push(message.toUpperCase());
        } else {
            result.push(message);
        }
        return result;
    }, []);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    for (const word of words) {
        if (word.length < 4) {
            count++;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string) =>
            color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((total, num) => total + num, 0);
    const addendsString = addends.join("+");

    return `${sum}=${addendsString}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum: number = 0;
    const result: number[] = [];

    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (value < 0) {
            // After the first negative number, insert the current sum
            result.push(value); // Add the negative number itself
            result.push(sum); // Add the sum of all previous numbers
            // Append the remaining numbers in the array to result
            result.push(...values.slice(i + 1));
            return result;
        } else {
            // Add the current number to the sum and to the result
            sum += value;
            result.push(value);
        }
    }

    // If no negative number is found, append the sum to the end
    result.push(sum);
    return result;
}
