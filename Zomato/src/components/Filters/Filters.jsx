const Filters = ({ onOpenModal }) => {
    return (
        <div className="container mx-auto my-8">
            <button
                onClick={onOpenModal}  // ✅ calls parent to open modal
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
                Open Filters
            </button>
        </div>
    );
};

export default Filters;