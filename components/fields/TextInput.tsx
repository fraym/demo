import { FC } from "react";

interface TextInputProps {
    label: string;
    name: string;
}

export const TextInput: FC<TextInputProps> = ({ label, name }) => {
    return (
        <label>
            <span>{label}:</span>
            <input type="text" name={name} />
        </label>
    );
};
