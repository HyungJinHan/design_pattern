const {
  abstractCharacterFactory,
  Emperor,
  Governor,
  Runner,
} = require("./abstract_character_factory_1");

abstractCharacterFactory.addJob("emperor", Emperor);
abstractCharacterFactory.addJob("governor", Governor);
abstractCharacterFactory.addJob("runner", Runner);

let emperorInfo = {
  nero: { name: "Nero" },
};
let governorInfo = {
  vindex: { name: "Vindex" },
  galba: { name: "Galba" },
  otho: { name: "Otho" },
  vitellius: { name: "Vitellius" },
  rufus: { name: "Rufus" },
};

const nero = abstractCharacterFactory.create("emperor", emperorInfo.nero);
const runner_nero = abstractCharacterFactory.create("runner", emperorInfo.nero);
const vindex = abstractCharacterFactory.create("governor", governorInfo.vindex);
const galba = abstractCharacterFactory.create("governor", governorInfo.galba);
const otho = abstractCharacterFactory.create("governor", governorInfo.otho);
const vitellius = abstractCharacterFactory.create(
  "governor",
  governorInfo.vitellius
);
const rufus = abstractCharacterFactory.create("governor", governorInfo.rufus);

nero.proclaim();
nero.attack("All");

vindex.betray();
vindex.attack(emperorInfo.nero.name);

galba.betray();
galba.attack(emperorInfo.nero.name);

otho.betray();
otho.attack(emperorInfo.nero.name);

vitellius.betray();
vitellius.attack(emperorInfo.nero.name);

rufus.betray();
rufus.attack(emperorInfo.nero.name);

runner_nero.run();
