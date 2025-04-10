import Customer from '../models/Customer.js';

export const addCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("❌ Error saving customer:", error);
    res.status(500).json({ message: 'Failed to create customer' });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error("❌ Error fetching customers:", error);
    res.status(500).json({ message: 'Failed to fetch customers' });
  }
};