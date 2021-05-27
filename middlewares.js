export function validateCookie(req, res, next) {
    const {cookies} = req
    if ('user_name' in cookies) next()
    else res.redirect('/name')
}

export function signinCookie(req, res, next) {
    const {name} = req.query
    if (name) {
        res.cookie('user_name', name)
        res.redirect('/')
    } 
    else next()
}