import { upperFirst } from "../../../../../../utils/functions";

import "./SubCategorySelection.styles.scss";

export default function SubCategorySelection({subCategories, onSubCategorySelect}){
    return (
        <div className="sub-category-selection card">
            {subCategories?.map(i => <SubCategoryCard subCategory={i} onSelect={() => onSubCategorySelect(i)} />)}
        </div>
    )
}

const SubCategoryCard = ({subCategory, onSelect}) => {
    return (
        <div className="sub-category-card">
            <div className="header">
                <span className="title">{upperFirst(subCategory.brandCode)}</span>
                <span className="price">
                    <span className="currency">{subCategory.price.currency}</span>
                    <span className="amoun">{subCategory.price.amount}</span>
                </span>
            </div>
            <div className="body">
                <ul>{subCategory.rights.map(i => <li>{i}</li>)}</ul>
            </div>
            <button className="footer" onClick={onSelect}>Uçuşu Seç</button>
        </div>
    )
}