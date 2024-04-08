import Attribute, { ValueAttributeModel } from "../models/attribute";
export const createAttribute = async (req, res) => {
    try {
        const { name } = req.body;
        const attribute = new Attribute({
            name,
        });
        const newAttribute = await attribute.save();
        res.status(201).json(newAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllAttributes = async (req, res) => {
    try {
        const attributes = await Attribute.find().populate("values");
        res.json(attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAttributeById = async (req, res) => {
    try {
        const attribute = await Attribute.findById(req.params.id).populate("values");
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        res.json(attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAttribute = async (req, res) => {
    try {
        const { name } = req.body;
        const attribute = await Attribute.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        attribute.name = name;
        const updatedAttribute = await attribute.save();
        res.json(updatedAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteAttribute = async (req, res) => {
    try {
        const attribute = await Attribute.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        await attribute.remove();
        res.json({ message: "Attribute deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createValueAttribute = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const attribute = await Attribute.findById(req.params.id);
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        const valueAttribute = new ValueAttributeModel({
            name,
            price,
            quantity,
        });
        const newValueAttribute = await valueAttribute.save();
        attribute.values.push(newValueAttribute);
        await attribute.save();
        res.status(201).json(newValueAttribute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllValueAttributes = async (req, res) => {
    try {
        const values = await ValueAttributeModel.find();
        res.json(values);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getValueAttributeById = async (req, res) => {
    try {
        const value = await ValueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        res.json(value);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateValueAttribute = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const value = await ValueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        value.name = name;
        value.price = price;
        value.quantity = quantity;
        const updatedValue = await value.save();
        res.json(updatedValue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteValueAttribute = async (req, res) => {
    try {
        const value = await ValueAttributeModel.findById(req.params.id);
        if (!value) {
            return res.status(404).json({ message: "ValueAttribute not found" });
        }
        await value.remove();
        res.json({ message: "ValueAttribute deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
