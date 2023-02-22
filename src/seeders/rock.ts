import { Rock, RockGroup } from "../models/Rock";

const dataArray = [{
    shortName: 'a',
    fullName: 'a',
    group: RockGroup.Igneous
}]

const seed = Rock.bulkCreate(dataArray, 
    {
        updateOnDuplicate: ["name"] 
    } )

export default seed;