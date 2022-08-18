import { Box } from "../models/Box.js"

export const getBoxes = async (req, res) => {
    const boxes = await Box.findAll()
    res.json(boxes)
}

export const createBox = async (req, res) => {
    const {title, image, size, dimention, color, price, description} = req.body

    const newBox = await Box.create({
        title,
        image,
        size,
        dimention,
        color, 
        price,
        description
    })

    console.log(newBox)

    res.send('creating projects')
}