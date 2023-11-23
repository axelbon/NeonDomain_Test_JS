const db = require('./db');

const User = {
    getAllUsers: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (userId) => {
        try {
            const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    },

    createUser: async (userData) => {
        const { firstname, lastname, age, username, password } = userData;
        try {
            const [result] = await db.query(
                'INSERT INTO users (firstname, lastname, age, username, password, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [firstname, lastname, age, username, password, new Date(), new Date()] 
            );
            const newUser = { id: result.insertId, firstname, lastname, age, username, password };
            return newUser;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (userId, userData) => {
        const { firstname, lastname, age, username, password } = userData;
        try {
            const [result] = await db.query(
                'UPDATE users SET firstname = ?, lastname = ?, age = ?, username = ?, password = ?, updatedAt = ? WHERE id = ?',
                [firstname, lastname, age, username, password, new Date(), userId]
            );
            if (result.affectedRows === 0) return null; // No user was updated
            const updatedUser = { id: userId, firstname, lastname, age, username, password };
            return updatedUser;
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (userId) => {
        try {
            const [result] = await db.query('DELETE FROM users WHERE id = ?', [userId]);
            if (result.affectedRows === 0) return null; // No user was deleted
            return { id: userId };
        } catch (error) {
            throw error;
        }
    },
};

module.exports = User;