import React, { useState, useEffect } from "react";
import "../styles/GestionOrdenes.css";

const GestionOrdenes = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    type: "compra",
    items: [{ product: "", quantity: "", price: "" }],
  });
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error al obtener las órdenes", error);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const items = [...newOrder.items];
    items[index][name] = value;
    setNewOrder({ ...newOrder, items });
  };

  const handleAddItem = () => {
    if (newOrder.items.length < 20) {
      setNewOrder({
        ...newOrder,
        items: [...newOrder.items, { product: "", quantity: "", price: "" }],
      });
    } else {
      alert("La cantidad máxima de ítems es 20.");
    }
  };

  const handleRemoveItem = (index) => {
    const items = [...newOrder.items];
    items.splice(index, 1);
    setNewOrder({ ...newOrder, items });
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });
      const data = await response.json();
      setOrders([...orders, data]);
      setNewOrder({
        type: "compra",
        items: [{ product: "", quantity: "", price: "" }],
      });
    } catch (error) {
      console.error("Error al crear la orden", error);
    }
  };

  const handleEditOrder = (order) => {
    setEditingOrder(order);
  };

  const handleUpdateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/orders/${editingOrder._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingOrder),
        }
      );
      const data = await response.json();
      setOrders(orders.map((order) => (order._id === data._id ? data : order)));
      setEditingOrder(null);
    } catch (error) {
      console.error("Error al actualizar la orden", error);
    }
  };

  const handleEditInputChange = (e, index) => {
    const { name, value } = e.target;
    const items = [...editingOrder.items];
    items[index][name] = value;
    setEditingOrder({ ...editingOrder, items });
  };

  const handleAddEditItem = () => {
    if (editingOrder.items.length < 20) {
      setEditingOrder({
        ...editingOrder,
        items: [
          ...editingOrder.items,
          { product: "", quantity: "", price: "" },
        ],
      });
    } else {
      alert("La cantidad máxima de ítems es 20.");
    }
  };

  const handleRemoveEditItem = (index) => {
    const items = [...editingOrder.items];
    items.splice(index, 1);
    setEditingOrder({ ...editingOrder, items });
  };

  return (
    <div className="gestion-ordenes-container">
      <h2>Gestión de Órdenes</h2>
      <form onSubmit={editingOrder ? handleUpdateOrder : handleCreateOrder}>
        <select
          name="type"
          value={editingOrder ? editingOrder.type : newOrder.type}
          onChange={
            editingOrder
              ? (e) =>
                  setEditingOrder({ ...editingOrder, type: e.target.value })
              : (e) => setNewOrder({ ...newOrder, type: e.target.value })
          }
          required
        >
          <option value="compra">Orden de Compra</option>
          <option value="pedido">Orden de Pedido</option>
        </select>
        {(editingOrder ? editingOrder.items : newOrder.items).map(
          (item, index) => (
            <div key={index} className="item">
              <input
                type="text"
                name="product"
                placeholder="Producto"
                value={item.product}
                onChange={
                  editingOrder
                    ? (e) => handleEditInputChange(e, index)
                    : (e) => handleInputChange(e, index)
                }
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Cantidad"
                value={item.quantity}
                onChange={
                  editingOrder
                    ? (e) => handleEditInputChange(e, index)
                    : (e) => handleInputChange(e, index)
                }
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Precio"
                value={item.price}
                onChange={
                  editingOrder
                    ? (e) => handleEditInputChange(e, index)
                    : (e) => handleInputChange(e, index)
                }
                required
              />
              <button
              className="remove-button"
                type="button"
                onClick={() =>
                  editingOrder
                    ? handleRemoveEditItem(index)
                    : handleRemoveItem(index)
                }
              >
                Eliminar
              </button>
            </div>
          )
        )}
        <button
        className="add-button"
          type="button"
          onClick={editingOrder ? handleAddEditItem : handleAddItem}
        >
          Agregar Item
        </button>
        <button className="submit-button"
        type="submit">
          {editingOrder ? "Actualizar Orden" : "Crear Orden"}
        </button>
      </form>
      <h3>Órdenes Existentes</h3>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            {order.type === "compra" ? "Compra" : "Pedido"} -{" "}
            {order.items
              .map((item) => `${item.product} (${item.quantity})`)
              .join(", ")}{" "}
            - $
            {order.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}{" "}
            - {order.status}
            <button onClick={() => handleEditOrder(order)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionOrdenes;
