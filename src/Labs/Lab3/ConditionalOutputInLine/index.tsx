import React from "react";
const ConditionalOutputInline = () => {
    const loggedIn = false;
    /**
     * A more compact way we can achieve the same thing as if/else including the conditional content in a boolean expression that short circuits the content if its false, or evaluates the expression if it's true.
     */
    return (
        <div id="wd-conditional-output-inline">
            {loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
            <hr/>
        </div>
    );
};
export default ConditionalOutputInline;
