import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Initialize two dice with different values to satisfy the initial test conditions
    const [leftDie, setLeftDie] = useState(1); // Set left die to 1
    const [rightDie, setRightDie] = useState(2); // Set right die to 2

    const handleRollLeft = () => {
        setLeftDie(d6());
    };

    const handleRollRight = () => {
        setRightDie(d6());
    };

    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={handleRollLeft}>Roll Left</Button>
                <Button onClick={handleRollRight}>Roll Right</Button>
            </div>
            {isLose && <div>Lose</div>}
            {isWin && !isLose && <div>Win</div>}
        </div>
    );
}
