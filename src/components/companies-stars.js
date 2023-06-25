import companyStar from 'assets/images/company-star.png';

export function CompaniesStars() {
    return (
        <div className="companies-bar__stars">
            <img src={companyStar} alt="company-star"/>
            <img src={companyStar} alt="company-star"/>
            <img src={companyStar} alt="company-star"/>
        </div>
    )
}