import { useState, useEffect } from "react";

function Recipes() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setData(result.recipes);
            });
    }, []);

    return (
        <>
        <section id="recipe_section" className="flex flex-wrap">
            {data.map((recipe) => {
                const width = (recipe.rating / 5) * 100;

                return (
                    <div key={recipe.id} className="card bg-base-100 w-80 shadow-sm m-auto">
                        <figure>
                            <img
                            src={recipe.image}
                            alt={recipe.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {recipe.name}
                            <div className="badge badge-secondary">{recipe.difficulty}</div>
                            </h2>
                            <p>{recipe.instructions?.[0]}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{recipe.tags?.[0]}</div>
                                <div className="badge badge-outline">{recipe.tags?.[1]}</div>
                            </div>
                            <div className="rating-stars">
                            <div
                                className="filled-stars"
                                style={{ width: `${width}%` }}
                            ></div>
                        </div>

                        <span>{recipe.rating}</span>
                        </div>
                    </div>

                );
            })}
        </section>
        </>
        
    );
}

export default Recipes;