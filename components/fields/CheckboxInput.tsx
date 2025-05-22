import { FC } from "react";

interface CheckboxInputProps {
    label: string;
    name: string;
}

export const CheckboxInput: FC<CheckboxInputProps> = ({ label, name }) => {
    return (
        <label>
            <input type="checkbox" name={name} />
            <span>{label}</span>
        </label>
    );
};
