var clauModel = require('../models/clauModel.js');

/**
 * clauController.js
 *
 * @description :: Server-side logic for managing claus.
 */
module.exports = {

    /**
     * clauController.list()
     */
    list: function (req, res) {
        clauModel.find(function (err, claus) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clau.',
                    error: err
                });
            }
            return res.json(claus);
        });
    },

    /**
     * clauController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        clauModel.findOne({_id: id}, function (err, clau) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clau.',
                    error: err
                });
            }
            if (!clau) {
                return res.status(404).json({
                    message: 'No such clau'
                });
            }
            return res.json(clau);
        });
    },

    /**
     * clauController.create()
     */
    create: function (req, res) {
        var clau = new clauModel({
			nom : req.body.nom,
			descripcio : req.body.descripcio,
			propietari : req.body.propietari

        });

        clau.save(function (err, clau) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating clau',
                    error: err
                });
            }
            return res.status(201).json(clau);
        });
    },

    /**
     * clauController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        clauModel.findOne({_id: id}, function (err, clau) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clau',
                    error: err
                });
            }
            if (!clau) {
                return res.status(404).json({
                    message: 'No such clau'
                });
            }

            clau.nom = req.body.nom ? req.body.nom : clau.nom;
			clau.descripcio = req.body.descripcio ? req.body.descripcio : clau.descripcio;
			clau.propietari = req.body.propietari ? req.body.propietari : clau.propietari;
			
            clau.save(function (err, clau) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating clau.',
                        error: err
                    });
                }

                return res.json(clau);
            });
        });
    },

    /**
     * clauController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        clauModel.findByIdAndRemove(id, function (err, clau) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the clau.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
