
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
