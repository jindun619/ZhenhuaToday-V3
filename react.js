// Common Components
function Nav({ active }) {
  if (active == "home") {
    var home = true;
  }
  if (active == "food") {
    var food = true;
  }
  if (active == "community") {
    var community = true;
  }
  if (active == "contact") {
    var contact = true;
  }
  if (active == "log") {
    var log = true;
  }
  return (
    <nav className="navbar navbar-expand-sm container-fluid container-sm navbar-dark bg-primary">
      <a href="#" className="navbar-brand">
        振华TODAY
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <a
            href="./index.html"
            className={"nav-item nav-link" + (home ? " active" : "")}
          >
            Home
          </a>
          <a
            href="./food/index.html"
            className={"nav-item nav-link" + (food ? " active" : "")}
          >
            Food
          </a>
          <a
            href="./community/index.html"
            className={"nav-item nav-link" + (community ? " active" : "")}
          >
            Community
          </a>
          <a
            href="#"
            className={"nav-item nav-link" + (contact ? " active" : "")}
          >
            Contact
          </a>
          <a href="#" className={"nav-item nav-link" + (log ? " active" : "")}>
            Log
          </a>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn btn-sm btn-outline-light">한</button>
        <button className="btn btn-sm btn-outline-light">中</button>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

// Food Components
function FoodContainer({ foodMenu }) {
  const printedDate = getPrintedDate(selectedDate);
  const todayMenu = foodMenu.filter(value => {
    return value.date === printedDate;
  });

  const bfObj = todayMenu.filter(value => {
    return value.bld == 0;
  });
  const lcObj = todayMenu.filter(value => {
    return value.bld == 1;
  });
  const dnObj = todayMenu.filter(value => {
    return value.bld == 2;
  });

  return (
    <div className="row">
      <FoodMenu menu={bfObj} bld="0" />
      <FoodMenu menu={lcObj} bld="1" />
      <FoodMenu menu={dnObj} bld="2" />
    </div>
  );
}

var tmp1 = "kimchi";
var tmp2 =
  "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg";

function FoodMenu({ menu, bld }) {
  const foodPara = getFoodPara(menu);
  return (
    <div className="col-md-4 mb-3">
      <div className="alert alert-primary border border-primary mt-3 mb-0">
        <h4 className="m-0 text-center text-primary">{bld}</h4>
      </div>
      {foodPara.map(value => {
        return <FoodItem name={value[0]} img={value[1]} />;
      })}
    </div>
  );
}

function FoodItem({ name, img }) {
  return (
    <div className="col-12 p-0">
      <div className="card border-primarys rounded-0 text-primary">
        <img src={img} className="card-img-top" />
        <div className="card-body p-0">
          <h5 className="card-title text-center">
            {name}
            <svg
              className="bi bi-heart"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
                clip-rule="evenodd"
              />
            </svg>
          </h5>
        </div>
      </div>
    </div>
  );
}
