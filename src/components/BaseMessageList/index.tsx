import { Button } from "antd";
import React, { useState } from 'react';
import styles from "./index.less";
interface BaseMessageListProps {
    onSelect: (option: string) => void;
    children: any;
    value?: string;
}

interface BaseMessageListItemProps {
    onSelect?: (option: string) => void;
    selected?: boolean;
    value: string | number;
    children?: any;
}

const BaseMessageList: React.FC<BaseMessageListProps> & {
    Item: React.FC<BaseMessageListItemProps>;
} = ({ children, onSelect, value }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(value || null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect && onSelect(option);
    };

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<BaseMessageListItemProps>, {
                    onSelect: handleSelect,
                    selected: child.props.value === selectedOption,
                })
            )}
        </div>
    );
};

const BaseMessageListItem: React.FC<BaseMessageListItemProps> = ({
    children,
    onSelect,
    selected,
    value,
}) => (
    <div
        onClick={() => onSelect && onSelect(value)}
        className={`msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_bg_subtle_hover ${selected && 'msg_bg_subtle_night'} msg-py-2 msg-px-4`}
        style={{marginBottom:value==0&&'20px'||'0'}}
    >
        {children}
    </div>
);

BaseMessageList.Item = BaseMessageListItem;

export default BaseMessageList;
