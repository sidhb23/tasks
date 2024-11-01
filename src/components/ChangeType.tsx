import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // Initial state is set to short_answer_question
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            <div>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
