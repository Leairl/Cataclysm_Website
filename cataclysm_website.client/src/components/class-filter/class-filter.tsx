import React, { useState, useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { ClassColor } from '../../helpers/classColorHelper';
import './class-filter.css';

// Define World of Warcraft classes including 'All Classes'
const wowClasses = ['All Classes', 'Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Shaman', 'Mage', 'Warlock', 'Druid'];

// Import class icons
const classIcons = wowClasses.reduce((icons, className) => {
  if (className !== 'All Classes') {
    icons[className] = `/ProfileClassIcons/${className.replace(' ', '').toLowerCase()}.png`;
  }
  return icons;
}, {} as { [key: string]: string });

const ClassFilter = () => {
  // Handle state management
  const [selectedClasses, setSelectedClasses] = useState<string[]>(['All Classes']);

  useEffect(() => {
    if (selectedClasses.length === 0) {
      setSelectedClasses(['All Classes']);
    }
  }, [selectedClasses]);

  const handleSelect = (className: string) => {
    if (className === 'All Classes') {
      setSelectedClasses(['All Classes']);
    } else {
      setSelectedClasses(prev => {
        const newSelectedClasses = prev.includes(className)
          ? prev.filter(c => c !== className)
          : [...prev.filter(c => c !== 'All Classes'), className];
        return newSelectedClasses.length === wowClasses.length - 1 ? ['All Classes'] : newSelectedClasses;
      });
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="CustomButton" variant="soft" color="gray">
          Filter by Class
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="DropdownMenuContent">
        {wowClasses.map((className) => (
          <DropdownMenu.Item
            key={className}
            className={`DropdownMenuItem ${selectedClasses.includes(className) || selectedClasses.includes('All Classes') ? 'selected' : ''}`}
            onSelect={() => handleSelect(className)}
            style={{ color: ClassColor.get(className) || "white" }} // Apply class color
          >
            <div className="ClassItem">
              <Checkbox.Root
                className="CheckboxRoot"
                checked={selectedClasses.includes(className) || selectedClasses.includes('All Classes')}
                onCheckedChange={() => handleSelect(className)}
              >
                <Checkbox.Indicator className="CheckboxIndicator">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              {className !== 'All Classes' && (
                <img src={classIcons[className]} alt={className} className="ClassIcon" title={className} />
              )}
              <span>{className}</span>
            </div>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default ClassFilter;