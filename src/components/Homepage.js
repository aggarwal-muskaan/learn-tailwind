import React from "react";
import curry from "../images/curry.jpg";
import noodles from "../images/noodles.jpg";
import stew from "../images/stew.jpg";

function Homepage() {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>

          <div>
            {/* <!-- cards go here --> */}
            <div>
              <img src={stew} alt="stew" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4>Most Popular</h4>

          <div>{/* <!-- cards go here --> */}</div>
        </div>

        <div>
          <div>Load more</div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
