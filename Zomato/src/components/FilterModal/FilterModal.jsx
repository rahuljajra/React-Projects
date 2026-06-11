import { useState } from "react";

const FilterModal = ({ isOpen, onClose, filterRes, onFilter }) => {

    const [setFilters, setSelectedFilters] = useState({
        fastDelivery : false,
        Rating: false,
        pureVeg: false,
        offer: false
    })

    if (!isOpen) return null;
    return (
        // Backdrop
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={onClose}  // ✅ click outside to close
        >
            {/* Modal box — stop click from bubbling to backdrop */}
            <div
                className="bg-white rounded-xl shadow-lg p-6 w-96"
                onClick={(e) => e.stopPropagation()}  // ✅ prevent closing when clicking inside
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Filter options */}
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2">
                        <input value={"Fast Delivery"} type="checkbox" /> Fast Delivery
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value={4} onChange={() => onFilter(filterRes.filter((res)=> {
                            return res.info.avgRating > 4
                        }))} /> Ratings 4.0+
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Pure Veg
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> Offers
                    </label>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;