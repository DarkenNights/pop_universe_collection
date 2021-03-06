import dbConnect from '../../utils/dbConnect'
const VinylModel = require('../../models/Vinyl')
const GameModel = require('../../models/Game')
const BookModel = require('../../models/Book')
import { NextApiRequest, NextApiResponse } from 'next'

const add = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            await dbConnect()
            switch (req.body.type) {
                case 'vinyls':
                    const vinyl = new VinylModel({
                        title: req.body.title,
                        image: req.body.image,
                        blur: req.body.blur,
                        description: req.body.description,
                        command: req.body.command,
                    })
                    await vinyl.save()
                    break
                case 'games':
                    const game = new GameModel({
                        title: req.body.title,
                        image: req.body.image,
                        blur: req.body.blur,
                        description: req.body.description,
                        command: req.body.command,
                    })
                    await game.save()
                    break
                case 'books':
                    const book = new BookModel({
                        title: req.body.title,
                        image: req.body.image,
                        blur: req.body.blur,
                        description: req.body.description,
                        command: req.body.command,
                    })
                    await book.save()
                    break
            }
            return res.status(201).send('')
        } catch (err: any) {
            console.log(err.message)
            return res.status(500).send(err)
        }
    } else {
        res.status(405).send('Method not allowed')
    }
}

export default add
