import React, { useState } from "react";

export default function useInput<T>(initValue: T) {
    const [value, setValue] = useState<T | string>(initValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = (e.target.value).toString()
        setValue(val);
    }

    return {
        value,
        onChange
    }
}
