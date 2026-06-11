
import CategoryList from "./CategoryList";
const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleAcc = () => {
        // setShowList(!showList)
        setShowIndex();
    }
    return(
        <>
            <div className="acc-header">
                <h2 className="flex justify-between items-center py-4 px-4 shadow-lg rounded cursor-pointer bg-gray-300 my-2" onClick={handleAcc}>
                    <span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
                <span><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg></span></h2>
                {showItems && <CategoryList data = {data} />}
            </div>
            
        </>
    )
}

export default RestaurantCategory;