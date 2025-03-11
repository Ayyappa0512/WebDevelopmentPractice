import React from "react";
import Entry from "./Entry";

function CreateEntry(emojipedia) {
    return (
        <Entry
            key={emojipedia.id}
            name={emojipedia.name}
            symbol={emojipedia.emoji}
            description={emojipedia.meaning} />);
}

export default CreateEntry;