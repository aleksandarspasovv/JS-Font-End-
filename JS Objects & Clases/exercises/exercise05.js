function registerForHeroes(arrData) {
    let finalHeroes = [];

    for (let i = 0; i < arrData.length; i++) {
        let [name, level, items] = arrData[i].split(' / ');
        let currentHero = {};
        currentHero.name = name;
        currentHero.level = Number(level);
        currentHero.items = items;
        finalHeroes.push(currentHero);
    }

    for (let hero of finalHeroes) {
        console.log(`Hero: ${hero.name} \n level => ${hero.level} \n items => ${hero.items}`);
    }
}


registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])