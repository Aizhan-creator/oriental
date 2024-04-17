const User = require('../models/User');

exports.getRequests = async (req, res) => {
    try {
        const requests = await User.find({ approved: false });
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.approveRequest = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.approved = true;
        await user.save();
        res.status(200).json({ message: 'Request approved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
