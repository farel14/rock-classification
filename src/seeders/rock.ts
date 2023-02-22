import { RockModel, RockGroup } from "../models/Rock";

const dataArray = [{
    shortName: 'a',
    fullName: 'a',
    group: RockGroup.Igneous
}]

const seed = RockModel.bulkCreate(dataArray, 
    {
        updateOnDuplicate: ["name"] 
    } )

export default seed;