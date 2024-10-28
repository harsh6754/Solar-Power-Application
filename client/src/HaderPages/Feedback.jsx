import React, { useState, useEffect } from 'react';

function FeedbackForm() {
    const [tickets, setTickets] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        createdBy: '',
        search: '',
        priority: 'Low',
    });
    const [filter, setFilter] = useState({
        status: 'All',
        priority: 'All',
    });

    const fetchTickets = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tickets');
            const data = await response.json();
            setTickets(data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFilterChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/tickets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const newTicket = await response.json();
            setTickets([...tickets, newTicket]);
            setFormData({
                title: '',
                description: '',
                createdBy: '',
                search: '',
                priority: 'Low'
            });
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    const handleSearch = async (query) => {
        const searchQuery = query.toLowerCase().trim();
        if (searchQuery !== '') {
            const searchedTickets = tickets.filter(
                (ticket) =>
                    ticket.title.toLowerCase().includes(searchQuery) ||
                    ticket.description.toLowerCase().includes(searchQuery) ||
                    ticket.createdBy.toLowerCase().includes(searchQuery)
            );
            setTickets(searchedTickets);
        } else {
            fetchTickets();
        }
    };

    const handleDelete = async (ticketId) => {
        try {
            await fetch(`http://localhost:5000/api/tickets/${ticketId}`, { method: 'DELETE' });
            setTickets(tickets.filter((ticket) => ticket._id !== ticketId));
        } catch (error) {
            console.error('Error deleting ticket:', error);
        }
    };

    const handlePriorityChange = async (ticketId, newPriority) => {
        try {
            const response = await fetch(`http://localhost:5000/api/tickets/${ticketId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priority: newPriority }),
            });
            const updatedTicket = await response.json();
            setTickets((prevTickets) =>
                prevTickets.map((ticket) =>
                    ticket._id === ticketId ? { ...ticket, priority: updatedTicket.priority } : ticket
                )
            );
        } catch (error) {
            console.error('Error updating priority:', error);
        }
    };

    const filteredTickets = tickets.filter((ticket) => {
        const statusFilter = filter.status === 'All' ? true : ticket.status === filter.status;
        const priorityFilter = filter.priority === 'All' ? true : ticket.priority === filter.priority;
        return statusFilter && priorityFilter;
    });

    function getPriorityColor(priority) {
        switch (priority) {
            case 'Low': return 'bg-green-200';
            case 'Medium': return 'bg-yellow-200';
            case 'High': return 'bg-red-200';
            default: return 'bg-white';
        }
    }

    return (
        <div className="App p-6 bg-gray-100font-ubuntu w-full min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6 text-center">Ticket Raising Platform</h1>

            <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
                <div className="flex flex-col">
                    <label className="font-medium">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-medium">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-medium">Created By:</label>
                    <input
                        type="text"
                        name="createdBy"
                        value={formData.createdBy}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-medium">Priority:</label>
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="border rounded px-3 py-2"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">Submit</button>
            </form>

            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md my-6">
                <h2 className="text-lg font-semibold mb-4">Filters and Search</h2>
                <div className="flex flex-col gap-2 md:flex-row">
                    <select name="status" value={filter.status} onChange={handleFilterChange} className="border rounded px-2 py-2">
                        <option value="All">All</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                    <select name="priority" value={filter.priority} onChange={handleFilterChange} className="border rounded px-2 py-2">
                        <option value="All">All</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input
                        type="text"
                        name="search"
                        value={formData.search}
                        onChange={(e) => {
                            setFormData({ ...formData, search: e.target.value });
                            handleSearch(e.target.value);
                        }}
                        placeholder="Search tickets"
                        className="border rounded px-1 py-2"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full max-w-4xl">
                {filteredTickets.map((ticket) => (
                    <div key={ticket._id} className={`p-4 rounded-lg shadow-lg ${getPriorityColor(ticket.priority)}`}>
                        <h3 className="font-bold text-lg">{ticket.title}</h3>
                        <p>{ticket.description}</p>
                        <p className="text-sm text-gray-600">Created by: {ticket.createdBy}</p>
                        <div className="mt-2">
                            <label className="font-medium">Update Priority:</label>
                            <select
                                value={ticket.priority}
                                onChange={(e) => handlePriorityChange(ticket._id, e.target.value)}
                                className="border rounded px-2 py-1 ml-2"
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            <button onClick={() => handleDelete(ticket._id)} className="bg-red-500 text-white px-2 py-1 rounded ml-4 mt-2 md:mt-0">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeedbackForm;
