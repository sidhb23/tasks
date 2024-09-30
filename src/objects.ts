import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const expectedAnswer = question.expected.trim().toLowerCase();
    const providedAnswer = answer.trim().toLowerCase();
    return expectedAnswer === providedAnswer;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    // Check if the question type is 'short_answer_question'
    if (question.type === "short_answer_question") {
        return true; // Any answer is valid for a short answer question
    }

    // Check if the question type is 'multiple_choice_question'
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (question.type === "multiple_choice_question") {
        return question.options.includes(answer); // The answer is valid if it's one of the options
    }

    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */

export function toShortForm(question: Question): string {
    const shortName = question.name.slice(0, 10); // Get the first 10 characters of the name
    return `${question.id}: ${shortName}`; // Format as "id: shortName"
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    // Create the first line with the question name prefixed by `#`
    let result = `# ${question.name}\n`;

    // Add the body of the question
    result += `${question.body}`;

    // If it's a multiple-choice question, add the options
    if (question.type === "multiple_choice_question" && question.options) {
        // Add each option on its own line, prefixed with `- `
        result +=
            `\n` + question.options.map((option) => `- ${option}`).join("\n");
    }

    return result;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName }; // Create a new Question object with the updated name
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published }; // Invert the `published` field
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion, // Copy over all existing properties
        id, // Use the new `id` parameter
        name: `Copy of ${oldQuestion.name}`, // Modify the `name` to include "Copy of"
        published: false, // Reset `published` to `false`
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        ...question, // Copy over all properties from the original question
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        options: [...(question.options || []), newOption], // Create a new array with the old options + new option
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        id, // Set the new ID
        name, // Set the new name
        body: contentQuestion.body, // Use the `body` from contentQuestion
        type: contentQuestion.type, // Use the `type` from contentQuestion
        options: contentQuestion.options, // Use the `options` from contentQuestion
        expected: contentQuestion.expected, // Use the `expected` from contentQuestion
        points, // Set the points from the second object
        published: false, // Set `published` to false
    };
}
