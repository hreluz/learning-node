import { findHeroByID } from "./services/hero.service";

const hero = findHeroByID(3);

console.log(hero?.name ?? 'Hero not found')