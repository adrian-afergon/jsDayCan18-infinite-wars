
export interface Stone {
  name: string;
  description: string;
  action: string;
  image: string;
  equipped: boolean;
}


export interface Gauntlet {
  powerStone: Stone;
  spaceStone: Stone;
  realityStone: Stone;
  mindStone: Stone;
  soulStone: Stone;
  timeStone: Stone;
}

const powerStone: Stone = {
  equipped: false,
  description: 'Controls all of the power in the universe. It can be used to augment or inhibit any force.',
  action: 'Using super strength to crush the moon and throw it over to the Avengers!!',
  name: 'Power Stone',
  image: 'assets/infinite-stones/power-stone.png'
};

const spaceStone: Stone = {
  equipped: false,
  description: 'Limitless manipulation of space, allowing for teleportation, dimensional manipulation, ' +
    'creation of wormholes, etc.',
  action: 'Create a wormhole and transport from planet Titan to Wakanda in a minute!',
  name: 'Space Stone',
  image: 'assets/infinite-stones/space-stone.png'
};

const realityStone: Stone = {
  equipped: false,
  description: 'Locally or universally alters the natural laws of the universe to the wielders will.',
  action: 'Change the guns and knives of oponent into harmless bubbles. Transform the big guy into block ' +
    'of woods.',
  name: 'Reality Stone',
  image: 'assets/infinite-stones/reality-stone.png'
};

const mindStone: Stone = {
  equipped: false,
  description: 'Taps the user into the universal consciousness, allowing for unlimited ' +
    'manipulation of psionic powers including telepathy and telekinesis.',
  action: 'Know that my oponent Tony Stark is the most briliant person in the universe.',
  name: 'Mind Stone',
  image: 'assets/infinite-stones/mind-stone.png'
};

const soulStone: Stone = {
  equipped: false,
  description: 'Limitless manipulation of souls both alive and dead also has shown to ' +
    'be able to evolve or devolve a beings physical self as well as their mental capacities.',
  action: 'Bring a person back from the dead, or extract information from them.',
  name: 'Soul Stone',
  image: 'assets/infinite-stones/soul-stone.png'
};

const timeStone: Stone = {
  equipped: false,
  description: 'Total control over all aspects of time including time travel, stopping time, slowing down or speed up flow of time and to' +
    ' accelerate or slow down aging.',
  action: 'Turn back time so I can grab something before it gets destroyed!',
  name: 'Time Stone',
  image: 'assets/infinite-stones/time-stone.png'
};

export const gauntlet: Gauntlet = {
  mindStone,
  powerStone,
  realityStone,
  soulStone,
  spaceStone,
  timeStone
};
