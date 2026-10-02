import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { ClassColor } from '../../helpers/classColorHelper';
import { shuffleSpecs, shuffleSpecIcon } from '../../helpers/shuffle-specs';
import '../class-filter/class-filter.css';
import './shuffle-spec-filter.css';

interface ShuffleSpecFilterProps {
  //the selected spec's ladder slug, e.g. "shuffle-warrior-fury"
  selected: string;
  onSelect: (slug: string) => void;
}

//Picks which Solo Shuffle ladder to show. Looks like the class filter, but only one spec can be
//chosen, since every spec is its own ladder.
const ShuffleSpecFilter: React.FC<ShuffleSpecFilterProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const current = shuffleSpecs.find((s) => s.slug === props.selected);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <Button className="CustomButton" variant="soft" color="gray">
          {current && (
            <img src={shuffleSpecIcon(current)} alt="" className="ClassIcon" />
          )}
          <span style={{ color: ClassColor.get(current?.className ?? '') }}>
            {current ? `${current.specName} ${current.className}` : 'Choose a spec'}
          </span>
          <ChevronDownIcon className={`DropdownArrow ${isOpen ? 'open' : ''}`} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="DropdownMenuContent ShuffleSpecMenu" sideOffset={5}>
        {shuffleSpecs.map((spec) => (
          <DropdownMenu.Item
            key={spec.slug}
            className={`DropdownMenuItem ${spec.slug === props.selected ? 'selected' : ''}`}
            onSelect={() => props.onSelect(spec.slug)}
            style={{ color: ClassColor.get(spec.className) || 'white' }}
          >
            <div className="ClassItem">
              <img src={shuffleSpecIcon(spec)} alt="" className="ClassIcon" />
              <span>{spec.specName} {spec.className}</span>
            </div>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default ShuffleSpecFilter;
