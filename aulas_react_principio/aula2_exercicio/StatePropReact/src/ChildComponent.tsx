import {useState, useEffect} from 'react';

interface ChildProps {
    childProp: string;
}

export function ChildComponent({childProp}: ChildProps) {
    const [childState, setChildState] = useState<string>('');

    useEffect(() => {
        setChildState(childProp);
    }, [childProp]);

    return (
        <>
            <div>
                <h2>Child Component</h2>
                <p>Child State: {childState}</p>
            </div>
        </>
    );
}

// export default ChildComponent;