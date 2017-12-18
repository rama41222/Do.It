/*
 * Created by rama41222 on 12/15/17 11:08 PM
 * Copyright(c) 2017. All rights reserved
 *
 * Last Modified: 12/15/17 11:00 PM by Rama41222
 */

import todo from './todo/todo.routes'

export default app => {
    app.use('/api/v1/todo', todo )
}

