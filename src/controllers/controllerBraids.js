const mongoose = require('mongoose')
const Braids = require('../models/braids')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    const braids = new Braids({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        district: req.body.district,
        services: req.body.services,
        phone: req.body.phone,
        social: req.body.social,
        paymentMethods: req.body.paymentMethods
    }) 
    
    try{
        await braids.save()
        return res.status(201).json({
            message: "Estabelecimento cadastrado com sucesso!"
        })
        
    }catch(error) {
        return res.status(500).json({error})
    }   
}

const showUsers = async (req, res) => {

    try {
        const braids = await Braids.find({})
        res.json({
            braids: braids
        })

    } catch (error) {

        return res.status(500).json({
            message: error.message
        })
    }
}

const getOne = async (req, res) => {

    try {
        const braid = await Braids.findById(req.params.id)
        return res.status(200).json({
            estabelecimento: braid
        })

    } catch (error) {

        return res.status(500).json({
            message: `Não foi possível buscar, erro: ${error.message}`
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params

    try {
        const result = await Braids.findByIdAndUpdate(id, {...req.body})
        
        return res.json({
            message: `Estabelecimento atualizado com sucesso`
        })

    } catch (error) {
        return res.status(400).json({
            message: `Não foi possível atualizar o estabelecimento, erro: ${error}`
        })
    }
}

const deleteUser = async (req, res) => {

    const { id } = req.params
    try {

        const result = await Braids.findByIdAndDelete(id)
      
        if(!result){
            return res.status(400).json({
                message: `Não foi possível deletar o estabelecimento de id ${id}`
            })
        }

        return res.json({
            message: `Estabelecimento deletado com sucesso`
        })
    } catch (error) {
        return res.status(500).json({
           message:`Algo deu errado com a deleção, erro: ${error.message}`
        })
    }
}

module.exports = {
    createUser,
    showUsers,
    getOne,
    deleteUser,
    updateUser
}