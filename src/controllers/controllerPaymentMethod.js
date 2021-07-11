const mongoose = require('mongoose')
const PaymentMethod = require('../models/paymentMethod')

const createMethod = async (req, res) => {

    const result = await PaymentMethod.find({label: req.body.label})
    console.log(result)

    if (result.length > 0) {
        return res.status(400).json({
          message: "Esse método de pagamento já existe!"
        })
    }

    const payment = new PaymentMethod({
        _id: new mongoose.Types.ObjectId(),
        label: req.body.label
    }) 
    
    try{
        await payment.save()
        return res.status(201).json({
            message: "Método de pagamento cadastrado com sucesso!"
        })
        
    }catch(error) {
        return res.status(500).json({error})
    }   
}

const showMethod = async (req, res) => {

    try {
        const payment = await PaymentMethod.find({})
        res.json({
            payment: payment
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getOne = async (req, res) => {

    try {
        const payment = await PaymentMethod.findById(req.params.id)
        
        return res.status(200).json({
            payment: payment
        })

    } catch (error) {
        return res.status(400).json({
            message: `Não foi possível buscar, erro: ${error.message}`
        })
    }
}

const updateMethod = async (req, res) => {
    const { id } = req.params

    try {
        const result = await PaymentMethod.findByIdAndUpdate(id, {...req.body})
        
        return res.json({
            message: `Método de pagamento atualizado com sucesso`
        })

    } catch (error) {
        return res.status(400).json({
            message: `Não foi possível atualizar o method, erro: ${error}`
        })
    }
}

const deleteMethod = async (req, res) => {

    const { id } = req.params
    try {

        const result = await PaymentMethod.findByIdAndDelete(id)
      
        if(!result){
            return res.status(400).json({
                message: `Não foi possível deletar o method de id ${id}`
            })
        }

        return res.json({
            message: `Método de pagamento deletado com sucesso`
        })
    } catch (error) {
        return res.status(500).json({
           message:`Algo deu errado com a deleção, erro: ${error.message}`
        })
    }
}

module.exports = {
    createMethod,
    showMethod,
    getOne,
    deleteMethod,
    updateMethod
}