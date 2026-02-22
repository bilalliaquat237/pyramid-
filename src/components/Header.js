import React, { useState } from "react";
import Select from "react-select";
import { Col, Form, Row } from "react-bootstrap";
import {
  ArrowUpDownIcon,
  CheckCheck,
  ChevronsDownUp,
  ListFilter,
  SearchIcon,
  Share,
  Wand2Icon,
} from "lucide-react";

const Header = ({ isSidebarExpanded }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "xyz", label: "xyz" },
    { value: "abc", label: "abc" },
    { value: "fgd", label: "fgd" },
  ];

  return (
    <div className="header-wrapper">
      <div
        className={`app-header  ${isSidebarExpanded ? "expanded" : ""} d-md-flex align-items-center justify-content-between`}
      >
        <div className="header-content">
          <h1 className="mb-lg-0 mb-2">Comments</h1>
        </div>
        <div className="d-flex items-center justifiy-center">
          <Select
            className="header-select me-3"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="All Pulse Surveys"
          />
          <button className="header-btn">
            <div className="btn-img me-2">
              <Share className="header-btn-icon" />
            </div>
            Generate PDF
          </button>
        </div>
      </div>
      <div className="bottom-header">
        <Row>
          <Col lg={8}>
            <div className="bottom-tag-btn d-flex justifiy-content-bwtween align-items-center">
              <div className="position-relative">
                <div className="search-icon">
                  <SearchIcon className="header-btn-icon" />
                </div>
                <Form className="header-form">
                      <Form.Control
                  type="text"
                  placeholder="Search..."
                />
                </Form>
              </div>
              <div className="position-relative">
                <div className="search-icon">
                  <ArrowUpDownIcon className="header-btn-icon" />
                </div>
                <Select
                  className="header-select header-second-select me-3"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Sort by: Newest"
                />
              </div>
              <button className="header-btn me-3">
                <div className="btn-img me-2">
                  <ChevronsDownUp className="header-btn-icon" />
                </div>
                Collapse All
              </button>
              <button className="header-btn">
                <div className="btn-img me-2">
                  <CheckCheck className="header-btn-icon" />
                </div>
                Mark all read
              </button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-lg-end">
              <button className="header-btn me-3">
                <div className="btn-img me-2">
                  <ListFilter className="header-btn-icon" />
                </div>
                Filters
              </button>
              <button className="header-btn">
                <div className="btn-img me-2">
                  <Wand2Icon className="header-btn-icon" />
                </div>
                Al summary (2)
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
