import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { fetchProductSizes } from "../../constants/GlobalFunction";
export const ProductFilter = ({ category, setFilter, filterData, setAlphabetical, setPopular }) => {
    const [size, setSize] = useState([]);
    const [brand, setBrand] = useState([]);
    const [color, setColor] = useState([]);
    const [type, setType] = useState([]);
    const [department, setDepartment] = useState([]);
    const [updateClass, setUpdateClass] = useState({
        brand: false,
        size: false,
        color: false,
        type: false,
        department: false,
        orderByAlphabetical: false,
        orderByPopular: false,
    });
    const orderByAlphabetical = ["A-Z", "Z-A"];
    const orderByPopular = ["Most Popular", "Least Popular"];

    useEffect(() => {
        fetchProductSizes(category).then((response) => {
            let tempSize = [],
                tempBrand = [],
                tempColor = [],
                tempType = [],
                tempDepartment = [];
            for (let i = 0; i < response.length; i++) {
                let x = response[i];
                if (!tempSize.includes(x.productSize)) {
                    if (x.productSizeStock > 0) {
                        tempSize.push(x.productSize);
                    }
                }
                if (!tempBrand.includes(x.productBrand)) {
                    tempBrand.push(x.productBrand);
                }
                if (!tempColor.includes(x.productColor)) {
                    tempColor.push(x.productColor);
                }
                if (!tempType.includes(x.productType)) {
                    tempType.push(x.productType);
                }
                if (!tempDepartment.includes(x.Gender)) {
                    tempDepartment.push(x.Gender);
                }
            }
            setSize(tempSize.sort((a, b) => a - b));
            setBrand(tempBrand.sort((a, b) => a - b));
            setColor(tempColor.sort((a, b) => a - b));
            setType(tempType.sort((a, b) => a - b));
            setDepartment(tempDepartment.sort((a, b) => a - b));
        });
        onWindowClick();
    }, []);

    const onFilterClick = (filterType, filter) => {
        if (filterData.some((e) => e[filterType] === filter)) {
            let filtered = filterData.filter((e) => e[filterType] !== filter);
            setFilter(filtered);
        } else {
            setFilter((prevArray) => [...prevArray, { [filterType]: filter }]);
        }
    };

    const onHeaderClick = (currentClass) => {
        for (let i in updateClass) {
            let element = document.querySelector(`[filter-category="${i}"]`);

            if (i === currentClass) {
                setUpdateClass((prevState) => ({
                    ...prevState,
                    [currentClass]: !prevState[currentClass],
                }));

                if (element.style.maxHeight) {
                    element.style.maxHeight = null;
                } else {
                    element.style.maxHeight = element.scrollHeight + 20 + "px";
                }
            } else {
                setUpdateClass((prevState) => ({
                    ...prevState,
                    [i]: false,
                }));
                if (element) {
                    element.style.maxHeight = null;
                }
            }
        }
    };

    const onAlphabetical = (checkbox,item) => {
        let checkboxes = document.querySelectorAll('[filter-category="orderByAlphabetical"] input[type=checkbox]');
        checkboxes.forEach((item) => {
            if (item !== checkbox.target) item.checked = false;
        });
        setAlphabetical(item)
    };

    const onPopular = (checkbox,item) => {
        let checkboxes = document.querySelectorAll('[filter-category="orderByPopular"] input[type=checkbox]');
        checkboxes.forEach((item) => {
            if (item !== checkbox.target) item.checked = false;
        });
        setPopular(item)
    };

    const onWindowClick = () => {
        document.addEventListener("click", (e) => {
            if (
                e.target.nodeName !== "INPUT" &&
                e.target.nodeName !== "H5" &&
                e.target.nodeName !== "LABEL" &&
                e.target.nodeName !== "svg"
            ) {
                for (let i in updateClass) {
                    let element = document.querySelector(
                        `[filter-category="${i}"]`
                    );
                    setUpdateClass((prevState) => ({
                        ...prevState,
                        [i]: false,
                    }));
                    if (element) {
                        element.style.maxHeight = null;
                    }
                }
            }
        });
    };

    return (
        <div className="product-filter">
            <div
                className={`product-filter-content ${
                    updateClass["orderByAlphabetical"]
                        ? "collapse-show"
                        : "collapse-hide"
                }`}
            >
                <div
                    className="header"
                    onClick={() => onHeaderClick("orderByAlphabetical")}
                >
                    <h5>
                        Alphabetical <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </div>
                <div
                    className="filter-content"
                    filter-category="orderByAlphabetical"
                >
                    {orderByAlphabetical.map((item) => {
                        return (
                            <div className="filter-item" key={item}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={(e) => {
                                            onAlphabetical(e,item);
                                        }}
                                    />
                                    {item}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={`product-filter-content ${
                    updateClass["orderByPopular"]
                        ? "collapse-show"
                        : "collapse-hide"
                }`}
            >
                <div
                    className="header"
                    onClick={() => onHeaderClick("orderByPopular")}
                >
                    <h5>
                        Popular <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </div>
                <div
                    className="filter-content"
                    filter-category="orderByPopular"
                >
                    {orderByPopular.map((item) => {
                        return (
                            <div className="filter-item" key={item}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={(e) => {
                                            onPopular(e,item);
                                        }}
                                    />
                                    {item}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={`product-filter-content ${
                    updateClass["brand"] ? "collapse-show" : "collapse-hide"
                }`}
            >
                <div className="header" onClick={() => onHeaderClick("brand")}>
                    <h5>
                        Brands <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </div>
                <div className="filter-content" filter-category="brand">
                    {brand.map((item) => {
                        return (
                            <div className="filter-item" key={item}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            onFilterClick("productBrand", item)
                                        }
                                    />
                                    {item}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={`product-filter-content ${
                    updateClass["size"] ? "collapse-show" : "collapse-hide"
                }`}
            >
                <div className="header" onClick={() => onHeaderClick("size")}>
                    <h5>
                        Size <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </div>
                <div className="filter-content" filter-category="size">
                    {size.map((item) => {
                        return (
                            <div className="filter-item" key={item}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            onFilterClick(
                                                "productSize",
                                                item === "0" ? "onesize" : item
                                            )
                                        }
                                    />
                                    {item === "0" ? "One Size" : item}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={`product-filter-content ${
                    updateClass["color"] ? "collapse-show" : "collapse-hide"
                }`}
            >
                <div className="header" onClick={() => onHeaderClick("color")}>
                    <h5>
                        Color <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </div>

                <div className="filter-content" filter-category="color">
                    {color.map((item) => {
                        return (
                            <div className="filter-item" key={item}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            onFilterClick("productColor", item)
                                        }
                                    />
                                    {item}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div
                className={`product-filter-content ${
                    updateClass["type"] ? "collapse-show" : "collapse-hide"
                }`}
            >
                <div className="header" onClick={() => onHeaderClick("type")}>
                    <h5>
                        Type <FontAwesomeIcon icon={faChevronDown} />
                    </h5>
                </div>
                <div className="filter-content" filter-category="type">
                    {type.map((item) => {
                        return (
                            <div className="filter-item" key={item}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            onFilterClick("productType", item)
                                        }
                                    />
                                    {item}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            {category === "New" && (
                <div
                    className={`product-filter-content ${
                        updateClass["department"]
                            ? "collapse-show"
                            : "collapse-hide"
                    }`}
                >
                    <div
                        className="header"
                        onClick={() => onHeaderClick("department")}
                    >
                        <h5>
                            Department <FontAwesomeIcon icon={faChevronDown} />
                        </h5>
                    </div>
                    <div
                        className="filter-content"
                        filter-category="department"
                    >
                        {department.map((item) => {
                            return (
                                <div className="filter-item" key={item}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onClick={() =>
                                                onFilterClick("Gender", item)
                                            }
                                        />
                                        {item}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
