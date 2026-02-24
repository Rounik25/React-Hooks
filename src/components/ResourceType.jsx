import { useEffect, useState } from "react";

export function ResourceType() {
    const [resourceType, setResourceType] = useState("Post");

    useEffect(() => {
        console.log(`Resource updated to ${resourceType}`);
    }, [resourceType]);

    return (
        <>
            <div>
                <button onClick={() => setResourceType('Post')} >Post</button>
                <button onClick={() => setResourceType('Users')} >Users</button>
                <button onClick={() => setResourceType('Comments')} >Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    );

}
