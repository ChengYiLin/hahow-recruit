import { FC, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { getHeroesList } from "../../services";
import { IHeroInfo } from "../../types/service";

const Hero: FC = () => {
    const [heroList, setHeroList] = useState<IHeroInfo[]>([]);

    useEffect(() => {
        getHeroesList()
            .then((data) => {
                Array.isArray(data) ? setHeroList(data) : setHeroList([]);
            })
            .catch((error) => {
                if (error?.message) {
                    alert(error.message);
                } else {
                    console.error(error);
                }
            });
    }, []);

    return (
        <div>
            <ul style={{ display: "flex" }}>
                {heroList.map((heroInfo) => (
                    <li key={heroInfo.id}>
                        <Link to={`/hero/${heroInfo.id}`}>
                            <div>
                                <img
                                    src={`${heroInfo.image}`}
                                    alt={`${heroInfo.name}`}
                                />
                                <p>{heroInfo.name}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Hero;
