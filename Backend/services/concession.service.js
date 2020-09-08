const Concession = require('../models/concession.model');

exports.getConcessionById = async (id) => {
    try {
        const concession = await Concession.findById(id);
        return concession;
    } catch(error) {
        throw Error('Concession.service.js -> Error finding concession by id');
    }
};

exports.createConcession = async (concession) => {

    try {
        const con = await Concession.create(concession);
        return con;
    } catch(error) {
        throw Error('concession.service.js -> Error creating concession');
    }
};

exports.updateConcession = async (id, concession) => {
    try {
        concession._id = id;

        let updatedConcession = await Concession.findByIdAndUpdate(id, { $set: { "concession": concession.name,
         "price": concession.price } }, { new: true });

        console.log(updatedConcession);
        return updatedConcession;
    } catch(error) {
        console.log(error);
        throw Error('Concession.service.js -> Error updating concession');
    }
}

exports.deleteConcession = async (id) => {
    try {
        const conc = await Concession.findByIdAndDelete(id); 
    } catch(error) {
        console.log(error);
        throw Error('Concession.service.js -> Error deleting concession');
    }
};