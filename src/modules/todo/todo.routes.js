
/*
 * Created by rama41222 on 12/16/17 9:35 AM
 * Copyright(c) 2017. All rights reserved
 *
 * Last Modified: 12/16/17 9:35 AM by Rama41222
 */

import { Router } from 'express'
import * as TodoController from './todo.controller'

const routes = new Router()

routes.post('/', TodoController.create)
routes.get('/', TodoController.list)
routes.get('/:id', TodoController.get)

export default routes