"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ItemSelectorProps {
    label: string;
    items: {
        value: string;
        label: string;
    }[];
    value: string | null;
    onSelect: (value: string | null) => void;
}

export const ItemSelector: React.FC<ItemSelectorProps> = ({ label, items, value, onSelect }) => {
    return (
        <Select onValueChange={onSelect} defaultValue={value}>
            <SelectTrigger className="w-[280px] mb-6">
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
