const Summary = require('../models/Summary')

const summaryController = {
    getAllSummaries: async (req, res) => {
        try {
            const summaries = await Summary.getAllSummaries();
            res.json(summaries)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    getSummaryById: async (req, res) => {
        const summaryId = req.params.id;
        try {
            const summary = await Summary.getSummaryById(summaryId);
            if(!summary){
                return res.status(404).json({message: 'Summary not found'});
            }
            res.json(summary);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },

    createSummary: async (req, res) => {
        const { idea_summary, userId } = req.body;
        try {
            const newSummary = await Summary.createSummary(idea_summary, userId);
            res.status(201).json(newSummary);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    updateSummary: async (req, res) => {
        const summaryId = req.params.id;
        const { idea_summary } = req.body;
        try {
            const updatedSummary = await Summary.updateSummary(summaryId, idea_summary);
            if(!updatedSummary){
                return res.status(404).json({message: 'Summary not found'});
            }
            res.json(updatedSummary);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },

    deleteSummary: async (req, res) => {
        const summaryId = req.params.id;
        try {
            const deletedSummary = await Summary.deleteSummary(summaryId);
            if(!deletedSummary){
                return res.status(404).json({message: 'Summary not found'});
            }
            res.json({message: 'Summary deleted successfully'});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = summaryController;