import 'reflect-metadata';

import { Request, Response, Router } from 'express';
import { app } from './app';
import { CreateSpentController } from './App/Spents/Infra/Http/Controllers/CreateSpentController';
import { GetSpentsController } from './App/Spents/Infra/Http/Controllers/GetSpentsController';
import { UpdateSpentController } from './App/Spents/Infra/Http/Controllers/UpdateSpentController';
import { getBootstrapStarted } from './main';

const router = Router()

app.use(router)

async () => {
    await getBootstrapStarted()
}

router.get('/spents', async function (req: Request, res: Response) {
    return res.send(await GetSpentsController.from().getSpents(req, res))
})

router.get('/spents/:id', async function (req: Request, res: Response) {
   return res.send(await GetSpentsController.from().getSpentById(req, res))
})

router.put('/spents/:id', async function (req: Request, res: Response) {
    return await UpdateSpentController.from().update(req, res)
})

router.post('/spents/create', async function (req: Request, res: Response) {
    res.send(await CreateSpentController.from().create(req, res))
})