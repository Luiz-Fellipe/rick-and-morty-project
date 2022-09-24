import React from 'react';
import { Input } from 'shell/components/input';
import { Button } from 'shell/components/button';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function CharactersList() {
  return (
    <div>
      CharactersList{' '}
      <Input Icon={faMagnifyingGlass} placeholder="Type your character here" />
      <Button>Search</Button>
    </div>
  );
}
