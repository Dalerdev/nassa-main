import React from "react";
import "./styles.scss";
export default function Haveproject() {
  return (
    <div className="haveProject">
      <div className="haveProject_container">
        <span
          className="have_project_first_project"
        >
          Cooporation
        </span>
        <h1>Has project?</h1>
        <h1>Let's discuss</h1>
        <span className="have_project_second_project">
          Наша команда всегда готова к новым приключениям, <br /> оставляйте заявку, и
          мы скоро свяжемся.
        </span>
        <div />
        <form>
          <div className="haveProject_form_content">
            <div>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </div>
            <div>
              <span>Phone</span>
              <input type="text" placeholder="Your phone" />
            </div>
            <div>
              <span>Company</span>
              <input type="text" placeholder="Your company" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
