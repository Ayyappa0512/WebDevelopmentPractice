import React from "react";

function Entry(emoji) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label={emoji.name}>
                    {emoji.symbol}
                </span>
                <span>{emoji.name}</span>
            </dt>
            <dd>
                {emoji.description}
            </dd>
        </div>);
}

export default Entry;