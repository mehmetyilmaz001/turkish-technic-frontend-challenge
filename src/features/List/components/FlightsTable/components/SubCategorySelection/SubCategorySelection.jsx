import { useMemo } from "react";
import { upperFirst } from "../../../../../../utils/functions";

import "./SubCategorySelection.styles.scss";

export default function SubCategorySelection({ subCategories, onSubCategorySelect, selectedSubCategory, isPromoActive }) {
    return (
        <div className="sub-category-selection card">
            {subCategories?.map(i => <SubCategoryCard
                key={i.brandCode}
                selectedSubCategory={selectedSubCategory}
                subCategory={i}
                onSelect={onSubCategorySelect}
                isPromoActive={isPromoActive}
            />
            )}
        </div>
    )
}

const SubCategoryCard = ({ subCategory, onSelect, selectedSubCategory, isPromoActive }) => {
    const buttonSelectedClassName = useMemo(() => {
        const selectedClassName = "selected";

        if (!selectedSubCategory || (selectedSubCategory === subCategory)) {
            return selectedClassName;
        }

        return '';

    }, [selectedSubCategory, subCategory]);

    const amount = isPromoActive && subCategory.brandCode === 'ecoFly' ? subCategory.price.amount / 2 : subCategory.price.amount;

    return (
        <div className="sub-category-card">
            <div className="header">
                <span className="title">{upperFirst(subCategory.brandCode)}</span>
                <span className="price">
                    <span className="currency">{subCategory.price.currency}</span>
                    <span className="amoun">{amount}</span>
                </span>
            </div>
            <div className="body">
                <ul>{subCategory.rights.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <button 
                className={`footer-button ${buttonSelectedClassName}`} 
                onClick={() => onSelect({...subCategory, price: {...subCategory.price, amount}})} 
                disabled={isPromoActive && subCategory.brandCode !== 'ecoFly'}>
                    Uçuşu Seç
                </button>
        </div>
    )
}