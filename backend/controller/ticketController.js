const asyncHandler = require("express-async-handler");
const Ticket = require("../model/ticketModel");

//GET: Route:/user/ticket
const allTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find({});
  res.status(200).json(tickets);
});

//POST, Route:/user/ticket
const createTicket = asyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("Please Enter the values");
  }
  const ticket = await Ticket.create(req.body);
  res.status(200).json(ticket);
});

//PUT, Route/user/ticket/:id
const updateTicket = asyncHandler(async (req, res) => {
  const findTicket = await Ticket.findById(req.params.id);
  if (!findTicket) {
    res.status(400);
    throw new Error("Ticket not found");
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedTicket);
});

// DELETE, Route:/user/ticket/:id
const deleteTicket = asyncHandler(async (req, res) => {
  const findTicket = await Ticket.findById(req.params.id);
  if (!findTicket) {
    res.status(400);
    throw new Error("Ticket not found");
  }
  await findTicket.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { allTickets, createTicket, updateTicket, deleteTicket };
