import React, { useState } from 'react';

const Book = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [documents, setDocuments] = useState([]);
  
    const handleAddDocument = (newDocument) => {
        setDocuments([...documents, newDocument]);
        setIsModalOpen(false);
    };

    return (
        <div className="p-8">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Document List</h1>
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
            >
            Add Book
            </button>
        </div>

        <ul className="space-y-2">
            {documents.map((doc, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded shadow">
                <a href={URL.createObjectURL(doc)} target="_blank" rel="noopener noreferrer">
                {doc.name}
                </a>
            </li>
            ))}
        </ul>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Upload Document</h2>
                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const file = e.target.elements.documentFile.files[0];
                    if (file) {
                    handleAddDocument(file);
                    }
                }}
                >
                <input
                    type="file"
                    name="documentFile"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    accept=".pdf,.doc,.docx,.txt"
                    required
                />
                <div className="flex justify-end space-x-4">
                    <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded"
                    onClick={() => setIsModalOpen(false)}
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    );
}

export default Book;