const db = require('./db');

const Summary = {
    // Fetch all summaries with user details
    getAllSummaries: async () => {
        try {
            const sql = `
            SELECT s.id, s.idea_summary, s.posted_by, u.firstname, u.lastname, u.age, u.username, u.id
            FROM summaries s
            LEFT JOIN users u ON s.posted_by = u.id
          `;
            const results = await db.query(sql);
            return results;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Fetch a single summary with user details
    getSummaryById: async (summaryId) => {
        try {
            const sql = `
            SELECT s.id, s.idea_summary, s.posted_by, u.firstname, u.lastname, u.age, u.username, u.id
            FROM summaries s
            LEFT JOIN users u ON s.posted_by = u.id
            WHERE s.id = ?
          `;
            const results = await db.query(sql, [summaryId]);
            if (results.length === 0) {
                throw new Error('Summary not found');
            }
            return results[0];
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Create a summary
    createSummary: async (idea_summary, posted_by) => {
        try {
            const sql = 'INSERT INTO summaries (idea_summary, posted_by) VALUES (?, ?)';
            await db.query(sql, [idea_summary, posted_by]);
            return 'Summary created successfully';
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Update a summary
    updateSummary: async (summaryId, idea_summary) => {
        try {
            const sql = 'UPDATE summaries SET idea_summary = ? WHERE id = ?';
            const results = await db.query(sql, [idea_summary, summaryId]);
            if (results.affectedRows === 0) {
                throw new Error('Summary not found');
            }
            return 'Summary updated successfully';
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Delete a summary
    deleteSummary: async (summaryId) => {
        try {
            const sql = 'DELETE FROM summaries WHERE id = ?';
            const results = await db.query(sql, [summaryId]);
            if (results.affectedRows === 0) {
                throw new Error('Summary not found');
            }
            return 'Summary deleted successfully';
        } catch (error) {
            throw new Error(error.message);
        }
    }
}


module.exports = Summary