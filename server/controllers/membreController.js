var membreModel = require('../models/membreModel.js');

/**
 * membreController.js
 *
 * @description :: Server-side logic for managing membres.
 */
module.exports = {

    /**
     * membreController.list()
     */
    list: function (req, res) {
        membreModel.find(function (err, membres) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting membre.',
                    error: err
                });
            }
            return res.json(membres);
        });
    },

    /**
     * membreController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        membreModel.findOne({_id: id}, function (err, membre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting membre.',
                    error: err
                });
            }
            if (!membre) {
                return res.status(404).json({
                    message: 'No such membre'
                });
            }
            return res.json(membre);
        });
    },

    /**
     * membreController.create()
     */
    create: function (req, res) {
        var membre = new membreModel({
			nom : req.body.nom,
			cognoms : req.body.cognoms,
			email : req.body.email,
			telefon : req.body.telefon

        });

        membre.save(function (err, membre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating membre',
                    error: err
                });
            }
            return res.status(201).json(membre);
        });
    },

    /**
     * membreController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        membreModel.findOne({_id: id}, function (err, membre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting membre',
                    error: err
                });
            }
            if (!membre) {
                return res.status(404).json({
                    message: 'No such membre'
                });
            }

            membre.nom = req.body.nom ? req.body.nom : membre.nom;
			membre.cognoms = req.body.cognoms ? req.body.cognoms : membre.cognoms;
			membre.email = req.body.email ? req.body.email : membre.email;
			membre.telefon = req.body.telefon ? req.body.telefon : membre.telefon;
			
            membre.save(function (err, membre) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating membre.',
                        error: err
                    });
                }

                return res.json(membre);
            });
        });
    },

    /**
     * membreController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        membreModel.findByIdAndRemove(id, function (err, membre) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the membre.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
