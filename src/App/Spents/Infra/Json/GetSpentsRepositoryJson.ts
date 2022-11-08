import { injectable } from 'tsyringe';
import { Filter } from '../../../../Common/Filter/Filter';
import { GetSpentsRepository } from "../../Domain/GetSpentsRepository";
import { SpentsData } from "../../Domain/SpentsData";

import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile)
@injectable()
export class GetSpentsRepositoryJson implements GetSpentsRepository {
    async getSpents(filter: Filter, params: number): Promise<SpentsData[]> {
        const spent = await readFile('mocks/json/spents.json', {
            encoding: 'utf-8'
        })

        return await JSON.parse(spent)
    }

    static of(): GetSpentsRepositoryJson {
        return new GetSpentsRepositoryJson()
    }
}