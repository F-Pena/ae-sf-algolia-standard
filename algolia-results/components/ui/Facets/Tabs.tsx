import React from 'react';
import { useMenu } from 'react-instantsearch';

interface TabsProps {
    attribute: string;
}

const Tabs: React.FC<TabsProps> = ({ attribute }) => {
    const { items, refine } = useMenu({attribute: attribute});

    return (
        <div>
            {items.map((item) => (
                <button
                    key={item.value}
                    onClick={() => refine(item.value)}
                    style={{
                        fontWeight: item.isRefined ? 'bold' : 'normal',
                    }}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;