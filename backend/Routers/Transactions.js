/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Manage user financial transactions
 */

/**
 * @swagger
 * /api/transactions/addTransaction:
 *   post:
 *     summary: Add a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - category
 *               - type
 *               - date
 *             properties:
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Transaction added successfully
 *       400:
 *         description: Failed to add transaction
 */

/**
 * @swagger
 * /api/transactions/getTransaction:
 *   post:
 *     summary: Get all transactions for a user
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fetched transactions successfully
 *       404:
 *         description: No transactions found
 */

/**
 * @swagger
 * /api/transactions/deleteTransaction/{id}:
 *   post:
 *     summary: Delete a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 *       404:
 *         description: Transaction not found
 */

/**
 * @swagger
 * /api/transactions/updateTransaction/{id}:
 *   put:
 *     summary: Update a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Transaction ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *               date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 *       400:
 *         description: Failed to update transaction
 *       404:
 *         description: Transaction not found
 */

import express from 'express';
import {
  addTransactionController,
  deleteTransactionController,
  getAllTransactionController,
  updateTransactionController,
} from '../controllers/transactionController.js';

const router = express.Router();

router.route("/addTransaction").post(addTransactionController);
router.route("/getTransaction").post(getAllTransactionController);
router.route("/deleteTransaction/:id").post(deleteTransactionController);
router.route('/updateTransaction/:id').put(updateTransactionController);

export default router;
