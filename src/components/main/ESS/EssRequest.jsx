import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { Table } from "react-bootstrap";
import EssNav from "../EssNav";

function EssRequest() {
  return (
    <>
      <EssNav />

      <div className="container-fluid">
        <div>
          <div>
            <h3>ESS Request</h3>
            <button id="newRequest">
              <b>+</b>Create New Request
            </button>
          </div>
        </div>

        <div className="myRequest mt-3">
          <ul className="nav nav-tabs nav-tabs-simple">
            <li className="nav-item active">
              {/* <a
                data-target="#myRequests"
                data-val="0"
                role="tab"
                data-toggle="tab"
                href="#"
                aria-expanded="true"
              >
                My Requests
              </a> */}
              <Link to="#">My Request</Link>
            </li>
          </ul>
        </div>

        <div>
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label >Filter by Status</label> <br />
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  size="45"
                  placeholder="Search by request type"
                />
              </div>
              <div className="col-auto">
                <label >Request Date</label>
                <div className="input-group mb-2">
                  <select
                    name="data[]"
                    id="period"
                    className="no-margin requestDate"
                  >
                    <option value="1" defaultValue="selected">
                      All
                    </option>
                    <option value="2">Current Month</option>
                    <option value="3">Previous Month</option>
                    <option value="4">Custom</option>
                  </select>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mt-4 mb-2">
                  Apply
                </button>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-default mt-4 mb-2">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label >Search by</label> <br />
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  size="48"
                  placeholder="Search Request Number, Group, Request Type"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mt-4 mb-2">
                  Search
                </button>
              </div>
              <div className="col-auto sort">
                <label >Sort By</label>
                <div className="input-group mb-2">
                  <select className="form-control" id="sort-by">
                    <option value="1">Requested Date</option>
                    <option value="2">Request Number</option>
                    <option value="3">Request Group</option>
                    <option value="4">Request Type</option>
                    <option value="5">Requested By</option>
                    <option value="6">Status</option>
                  </select>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn sort-button">
                  <AiOutlineSortAscending />
                </button>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn sort-button">
                  <AiOutlineSortDescending />
                </button>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-default ml-5 mt-4 mb-2"
                >
                  <FaDownload />
                </button>
              </div>
              <div className="show">
                <select id="records-per-page">
                  <option value="25">Show 25</option>
                  <option value="50">Show 50</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <br />
        <div>
          <Table responsive="sm md">
            <thead>
              <tr className="top-row">
                <th>Request Number</th>
                <th>Request Group </th>
                <th>Request Type </th>
                <th>Requested By </th>
                <th>Assigned To </th>
                <th>Description </th>
                <th>
                  Requested Date <i className="fas fa-angle-down"></i>
                </th>
                <th>Status </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text">
                <td colSpan="10" align="center">
                  There are no requests to display.
                </td>
              </tr>
            </tbody>
          </Table>
          <hr />
        </div>
        <div>
          <div className="col-md-6">
            <div className="pagination-info">Showing 0 to 0 of 0 records. </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EssRequest;
