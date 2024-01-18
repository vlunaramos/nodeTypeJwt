import { Request, Response } from 'express'

export const signUp = (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Please send your email and password' });
    }
}

export const signIn = (req: Request, res: Response) => {
    res.send('signIn');
}