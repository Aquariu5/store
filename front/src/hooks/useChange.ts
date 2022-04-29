import { useState } from "react";

export default function useChange(defaultVal: string) {
    const [value, setValue] = useState<string | null>(defaultVal);

    const onChange = (val: string| null) => setValue(val);
    return {
        value,
        onChange
    }
}