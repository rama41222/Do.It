/*
 * Created by rama41222 on 12/16/17 9:28 AM
 * Copyright(c) 2017. All rights reserved
 *
 * Last Modified: 12/16/17 9:28 AM by Rama41222
 */
import HTTP_STATUS from 'http-status'
import User from './todo.model'

export async function create(req, res) {
    console.log(req.body)
    res.status(HTTP_STATUS.OK).json({ sum: 0 })
}

export async function list(req, res) {
    //const todos = await User.list()
    res.status(HTTP_STATUS.OK).send({})
}

export async function get(req, res) {
    res.status(HTTP_STATUS.OK).json({})
}


