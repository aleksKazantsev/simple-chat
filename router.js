import {Router} from 'express'

import {validateCookie, signinCookie} from './middlewares.js'


const router = Router()

router.get('/', validateCookie, (req, res) => 
    res.render('index', {title: 'Чат'}))

router.get('/name', signinCookie, (req, res) => 
    res.render('name', {title: 'Введите имя'}))

export default router