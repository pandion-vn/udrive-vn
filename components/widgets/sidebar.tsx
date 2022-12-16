const SideBar = () => {
  return (
    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
      <div className="sidebar sticky-bar ms-lg-4">

        <div className="widget mt-4 pt-2">
          <div className="rounded p-4 shadow bg-white">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded text-center">
              Recent Post
            </h6>
            <div className="mt-4">
              <div className="d-flex align-items-center">
                <img
                  src="/images/blog/01.jpg"
                  className="avatar avatar-small rounded"
                  style={{ width: 'auto' }}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <a href="#" className="d-block title text-dark">
                    Consultant Business
                  </a>
                  <span className="text-muted">15th April 2021</span>
                </div>
              </div>

              <div className="d-flex align-items-center mt-3">
                <img
                  src="/images/blog/02.jpg"
                  className="avatar avatar-small rounded"
                  style={{ width: 'auto' }}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <a href="#" className="d-block title text-dark">
                    Grow Your Business
                  </a>
                  <span className="text-muted">15th April 2021</span>
                </div>
              </div>

              <div className="d-flex align-items-center mt-3">
                <img
                  src="/images/blog/03.jpg"
                  className="avatar avatar-small rounded"
                  style={{ width: 'auto' }}
                  alt=""
                />
                <div className="flex-1 ms-3">
                  <a href="#" className="d-block title text-dark">
                    Look On The Glorious Balance
                  </a>
                  <span className="text-muted">15th April 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget mt-4 pt-2 text-center">
          <div className="rounded p-4 shadow bg-white">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded">
              Tags
            </h6>
            <div className="tagcloud mt-4">
              <a href="#" className="rounded text-dark">
                SUV
              </a>
              <a href="#" className="rounded text-dark">
                Crossover
              </a>
              <a href="#" className="rounded text-dark">
                Sedan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
