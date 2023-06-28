
export function NavBtn({ toggleNav, toggle }) {
    console.log(toggle);
    return (
        <button className="nav-btn" onClick={toggleNav}>
            {toggle ?
                <span className='nav-btn-x'>&#10006;</span> :
                <>
                    <hr />
                    <hr />
                    <hr />
                </>
            }
        </button>
    )
}