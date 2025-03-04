import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Crear una nueva orden
router.post("/", async (req, res) => {
  const { type, items } = req.body;
  try {
    const newOrder = await Order.create({ type, items });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la orden" });
  }
});

// Obtener todas las órdenes
router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener las órdenes" });
  }
});

// Actualizar una orden
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { type, items, status } = req.body;
  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: "Orden no encontrada" });
    }
    order.type = type;
    order.items = items;
    order.status = status;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la orden" });
  }
});

export default router;
