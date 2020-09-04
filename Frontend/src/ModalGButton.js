import React from "react";
import "./css/App.css";

// ModalGButton can take in argument values to populate the Modal

export default class ModalGButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              {/* Modal content */}
              <div class="modal-header">
                
                <h5 class="modal-title" id="exampleModalLongTitle">
                  **Film Title**
                </h5>
                <button
                  type="button"
                  class="close btn btn-sm btn-outline-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">More film info ... </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Save changes
                </button>
              </div>
               {/* Modal content */}
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-sm btn-qacinema"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          More Info
        </button>
      </div>
    );
  }
}
