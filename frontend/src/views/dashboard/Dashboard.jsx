import Main from "../layouts/Main";
import Slider from "../../components/Slider";
import Looper from "../../components/Looper";
import "../../assets/css/dashboard.css";
import "../../assets/css/component.css";

export default function Home() {
  return (
    <>
      <Main id="dashboard" className="row">
        <ProjectSection className="col-6" />
        <NewsSection className="col-6" />
        <TaskSection className="col-5" />
        <StatusSection className="col-3" />
        <div className="col-4"></div>
      </Main>
    </>
  );
}

function ProjectSection({ className }) {
  return (
    <section id="project_list" className={className}>
      <div className="card first">
        <h2 className="card-header h4 d-flex align-items-center">
          Project - 1
          <i className="bi bi-bell-fill position-relative ms-auto me-3 noti">
            <a href=""></a>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </i>
          <i className="bi bi-arrow-right-circle-fill text-primary">
            <a href=""></a>
          </i>
        </h2>
        <div className="card-body">
          <ul className="list-group list-group-flush p-2">
            <li className="list-group-item">
              <ul className="row">
                <li className="col-6">Release Date</li>
                <li className="col-6">2025/11/20</li>
              </ul>
            </li>
            <li className="list-group-item">
              <ul className="row">
                <li className="col-6">State</li>
                <li className="col-6">Testing</li>
              </ul>
            </li>
            <li className="list-group-item">
              <ul className="row">
                <li className="col-6">My Task</li>
                <li className="col-6">5 lfts</li>
              </ul>
            </li>
            <li className="list-group-item">
              <div className="progress">
                <div className="progress-bar" style={{ width: "25%" }}>25%</div>
              </div>
            </li>
          </ul>
          <div className="p-2 d-flex flex-column last-message">
            <div className="alert alert-success p-1">
              <p>
                Member Updated to git at 10 hours ago.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="project-list">
        <Looper quantity={3}>
          {({ index }) => (
            <li className="card">
              <div className="card-body p-2">
                <h2 className="h5 d-flex justify-content-between">
                  Project - {index}
                  <small className="active-time">
                    <i className="bi bi-clock-history me-2"></i>12:00 ago
                  </small>
                </h2>
                <div className="row align-items-center">
                  <time className="col-6" dateTime="2025/11/20">
                    <i className="bi bi-calendar2-check me-2"></i>
                    2025/11/20
                  </time>
                  <div className="col-6 text-center text-white state">
                    <div className="bg-primary p-1 rounded-1">Developing</div>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "25%" }}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
        </Looper>
      </ul>
    </section>
  );
}

function NewsSection({ className }) {
  return (
    <section id="news_slider" className={className}>
      <Slider quantity={4} id="news_slider-carousel">
        {({ index }) => (
          <div className="card overflow-hidden">
            <div className="card-body p-0 bg-primary text-white">
              <small className="card-top d-flex mb-4 p-2">
                <i className="bi bi-person-fill ms-auto me-2"></i>Danny
                <i className="bi bi-clock-history ms-2 me-2"></i>12:00 ago
              </small>
              <div className="card-content p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim perferendis minima sint magnam harum consectetur dolores aperiam, nam debitis nihil asperiores. Modi mollitia optio rerum laudantium cumque! Vitae, reiciendis?
              </div>
            </div>
          </div>
        )}
      </Slider>
    </section>
  );
}

function TaskSection({ className }) {
  return (
    <section id="task_list" className={className}>
      <ul className="accordion" id="task_accordion">
        <Looper quantity={["apple", "orange", "pear"]}>
          {({ data, index }) => (
            <li className="accordion-item">
              <h2 className="accordion-header" id={"task_header-" + index}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#task_collapse-" + index}>
                  <span className="end_date">2025/11/02</span>
                  <b>{data.toUpperCase()}</b>
                </button>
              </h2>
              <div id={"task_collapse-" + index} className="accordion-collapse collapse" data-bs-parent="#task_accordion">
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <ul className="row">
                        <li className="col-6">Project</li>
                        <li className="col-6">
                          <a href="">New Project 123456</a>
                        </li>
                      </ul>
                    </li>
                    <li className="list-group-item">
                      <ul className="row">
                        <li className="col-6">State</li>
                        <li className="col-6">Test</li>
                      </ul>
                    </li>
                    <li className="list-group-item">
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "25%" }}>25%</div>
                      </div>
                    </li>
                  </ul>
                  <h4 className="h6">Description</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi doloremque accusantium quod ipsa ratione totam veritatis aliquid nam maiores, quo accusamus rerum aperiam minima aspernatur, praesentium dolor quibusdam dolorum voluptate.
                  </p>
                  <div className="d-flex">
                    <i className="bi bi-bell-fill position-relative me-2">
                      <a href=""></a>
                      <small className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                      </small>
                    </i>
                    <i className="bi bi-bug-fill position-relative">
                      <a href=""></a>
                      <small className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                      </small>
                    </i>
                    <i className="bi bi-arrow-right-circle-fill text-primary ms-auto">
                      <a href=""></a>
                    </i>
                  </div>
                </div>
              </div>
            </li>
          )}
        </Looper>
      </ul>
    </section>
  );
}

function StatusSection({ className }) {
  return (
    <section id="working_status" className={className}>
      <div className="row m-0">
        <div className="col-12 status-block">
          <div className="card">
            <div className="card-body text-center p-1">
              <b>Total Working Time</b>
              <p>1260 hrs 52 mins</p>
            </div>
          </div>
        </div>
        <div className="col-6 status-block">
          <div className="card">
            <div className="card-body text-center p-1">
              <b>Paticipated Projects</b>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="col-6 status-block">
          <div className="card">
            <div className="card-body text-center p-1">
              <b>Task Completation</b>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
