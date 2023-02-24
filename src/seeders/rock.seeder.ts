import { RockGroup, RockType } from "../models/Rock";

const igneousRocks = [
  {
    shortName: "andesite",
    fullName: "Andesite",
  },
  {
    shortName: "basalt",
    fullName: "Basalt",
  },
  {
    shortName: "dacite",
    fullName: "Dacite",
  },
  {
    shortName: "diabase",
    fullName: "Diabase",
  },
  {
    shortName: "diorite",
    fullName: "Diorite",
  },
  {
    shortName: "gabbro",
    fullName: "Gabbro",
  },
  {
    shortName: "granite",
    fullName: "Granite",
  },
  {
    shortName: "obsidian",
    fullName: "Obsidian",
  },
  {
    shortName: "pegmatite",
    fullName: "Pegmatite",
  },
  {
    shortName: "peridotite",
    fullName: "Peridotite",
  },
  {
    shortName: "pumice",
    fullName: "Pumice",
  },
  {
    shortName: "rhyolite",
    fullName: "Rhyolite",
  },
  {
    shortName: "fire-opal",
    fullName: "Fire Opal",
  },
  {
    shortName: "scoria",
    fullName: "Scoria",
  },
  {
    shortName: "trap-rock",
    fullName: "Trap Rock",
  },
  {
    shortName: "unakite",
    fullName: "Unakite",
  },
  {
    shortName: "welded-tuff",
    fullName: "Welded Tuff",
  },
];

const sedimentaryRocks = [
  {
    shortName: "breccia",
    fullName: "Breccia",
  },
  {
    shortName: "caliche",
    fullName: "Caliche",
  },
  {
    shortName: "chalk",
    fullName: "Chalk",
  },
  {
    shortName: "coal",
    fullName: "Coal",
  },
  {
    shortName: "chert",
    fullName: "Chert",
  },
  {
    shortName: "coquina",
    fullName: "Coquina",
  },
  {
    shortName: "conglomerate",
    fullName: "Conglomerate",
  },
  {
    shortName: "dolomite",
    fullName: "Dolomite",
  },
  {
    shortName: "iron-ore",
    fullName: "Iron Ore",
  },
  {
    shortName: "flint",
    fullName: "Flint",
  },
  {
    shortName: "oil-shale",
    fullName: "Oil Shale",
  },
  {
    shortName: "limestone",
    fullName: "Limestone",
  },
  {
    shortName: "rock-salt",
    fullName: "Rock Salt",
  },
  {
    shortName: "sandstone",
    fullName: "Sandstone",
  },
  {
    shortName: "shale",
    fullName: "Shale",
  },
  {
    shortName: "siltstone",
    fullName: "Siltstone",
  },
];

const metamorphicRocks = [
  {
    shortName: "amphibolite",
    fullName: "Amphibolite",
  },
  {
    shortName: "anthracite",
    fullName: "Anthracite",
  },
  {
    shortName: "gneiss",
    fullName: "Gneiss",
  },
  {
    shortName: "lapis-lazuli",
    fullName: "Lapis Lazuli",
  },
  {
    shortName: "hornfels",
    fullName: "Hornfels",
  },
  {
    shortName: "mariposite",
    fullName: "Mariposite",
  },
  {
    shortName: "marble",
    fullName: "Marble",
  },
  {
    shortName: "phyllite",
    fullName: "Phyllite",
  },
  {
    shortName: "novaculite",
    fullName: "Novaculite",
  },
  {
    shortName: "schist",
    fullName: "Schist",
  },
  {
    shortName: "quartzite",
    fullName: "Quartzite",
  },
  {
    shortName: "skarn",
    fullName: "Skarn",
  },
  {
    shortName: "slate",
    fullName: "Slate",
  },
  {
    shortName: "soapstone",
    fullName: "Soapstone",
  },
];

export const rockSeeder: RockType[] = [
  ...igneousRocks.map((rock) => ({
    ...rock,
    group: RockGroup.Igneous,
  })),
  ...sedimentaryRocks.map((rock) => ({
    ...rock,
    group: RockGroup.Sedimentary,
  })),
  ...metamorphicRocks.map((rock) => ({
    ...rock,
    group: RockGroup.Metamorphic,
  })),
];
