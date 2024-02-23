const heroes = [
    {
        id: 1,
        name: 'Iron man',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    }
]

const findHeroByID = (id: number) => {
    return heroes.find(hero => hero.id  === id);
}

const hero = findHeroByID(5);

console.log(hero?.name ?? 'Hero not found')