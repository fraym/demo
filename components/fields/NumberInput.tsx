import { FC } from "react";

interface NumberInputProps {
    label: string;
    name: string;
}

export const NumberInput: FC<NumberInputProps> = ({ label, name }) => {
    return (
        <label>
            <span>{label}:</span>
            <input type="number" name={name} />
        </label>
    );
};
