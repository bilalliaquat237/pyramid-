import React, { useState } from "react";
import { Card, Col, Row, Tab, Tabs, useAccordionButton } from "react-bootstrap";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import DoubleUser from "../assets/img/svg/rounder-user.svg";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Ellipsis,
  ForwardIcon,
  Lock,
  Maximize2,
  NotebookPen,
  Plus,
  ReplyAllIcon,
  Share,
  Trash,
  User,
  X,
} from "lucide-react";

function Comments() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeBtn, setActiveBtn] = useState({});
  const [openKey, setOpenKey] = useState("1");
  const options = [
    { value: "xyz", label: "xyz" },
    { value: "abc", label: "abc" },
    { value: "gfg", label: "gfg" },
  ];
  const handleActiveBtn = (sectionId, action) => {
    setActiveBtn((prev) => ({
      ...prev,
      [sectionId]: action,
    }));
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setOpenKey(openKey === eventKey ? null : eventKey);
    });

    return (
      <div
        onClick={decoratedOnClick}
        style={{ cursor: "pointer", width: "100%" }}
      >
        {children}
      </div>
    );
  }
  return (
    <div className="comment-section">
      <Row>
        <Col xl={9} lg={8} sm={12}>
          <div className="content-wrapper">
            <div className="d-flex justify-content-between align-items-center mt-2 mb-4 px-2">
              <p className="mb-0">
                1–10 of 45
              </p>

              <div className="d-flex gap-2">
                <button className="pagination-btn">
                  <ChevronLeft size={18} />
                </button>

                <button className="pagination-btn">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="content-box accordion-wrapper mb-4">
              <Accordion activeKey={openKey}>
                <Card className="mb-3 border-0 ">
                  <Card.Header className="bg-white border-0 p-0 d-flex align-items-center justify-content-between">
                    <div>
                      <CustomToggle eventKey="0">
                        <div className="d-flex align-items-center">
                          <h2 className="mb-2">Word Cloud</h2>
                        </div>
                      </CustomToggle>
                      <p className="mb-0">
                        The more often a word is mentioned, the bigger and
                        bolder it appears. Commonly used words are not
                        displayed.
                      </p>
                    </div>
                    <div>
                      <div className="ms-3 d-flex align-items-center">
                        <div className="genrate-img me-3 ">
                          <Share className="header-btn-icon" />
                        </div>
                        {openKey === "0" ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </div>
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                      <hr />
                      <div className="">
                        <div className="bottom-tag-btn d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 bottom-tag-btn">
                            <button
                              onClick={() => handleActiveBtn("0", "reply")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["0"] === "reply" ? "active" : ""
                              }`}
                            >
                              <ReplyAllIcon className="me-2" />
                              Reply all
                            </button>
                            <button
                              onClick={() => handleActiveBtn("0", "forward")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["0"] === "forward" ? "active" : ""
                              }`}
                            >
                              <ForwardIcon className="me-2" />
                              Forward all
                            </button>
                            <button
                              onClick={() => handleActiveBtn("0", "note")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["0"] === "note" ? "active" : ""
                              }`}
                            >
                              <NotebookPen className="me-2" />
                              Add note
                            </button>
                          </div>
                          <div className="position-relative">
                            <div className="search-icon">
                              <img
                                className="img-fluid"
                                src={DoubleUser}
                                alt="sorted-icon"
                              />
                            </div>
                            <Select
                              className="header-select header-action-select"
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              placeholder="Assign all comments"
                            />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <Accordion activeKey={openKey} className="mb-4">
              <div className="content-box-two">
                <Card className="mb-3 border-0 ">
                  <Card.Header className="bg-white border-0 d-flex justify-content-between align-items-center">
                    <div>
                      <CustomToggle eventKey="1">
                        <div className="d-flex align-items-center">
                          <span className="custom-badge-color me-2">
                            Parent
                          </span>
                          <h2 className="mb-0">Cortland Armor</h2>
                          <span className="ms-2 accordian-circle"></span>
                        </div>
                      </CustomToggle>
                      <div
                        className="mt-2 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        📅 Tue, Oct 13, 2025 &nbsp; | &nbsp; 📋 View survey
                        &nbsp; | &nbsp;{" "}
                        <span className="custom-prometer-badge">Promoter</span>
                      </div>
                    </div>

                    <div className="ms-3">
                      {openKey === "1" ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="p-0">
                      <hr />
                      <div className="section-padding">
                        <p className="content-heading">
                          Please briefly describe why you provided that score:
                          <span className="ms-2 accordian-circle"></span>
                        </p>
                        <p>
                          There is a constant pulse of teaching and modeling a
                          Biblical worldview in every aspect of CVCS. Our kiddos
                          are learning about Jesus in every subject they learn.
                          What an incredibly important thread which weaves
                          through all interactions at school
                        </p>
                        <div className="d-flex justify-content-between">
                          <Ellipsis className="header-btn-icon" />
                          <div className="d-flex justify-content-between ">
                            <button className="action-btn d-flex">
                              <div className="button-img me-2">
                                <img
                                  className="img-fluid"
                                  src={DoubleUser}
                                  alt="user"
                                />
                              </div>
                              Assign comment
                            </button>
                            &nbsp; | &nbsp;
                            <button className="action-btn">
                              <Plus className="me-2 header-btn-icon" />
                              Add tag
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="section-padding">
                        <p className="content-heading">
                          Please briefly describe why you provided that score:{" "}
                          <span className="ms-2 accordian-circle"></span>
                        </p>
                        <p>
                          There is a constant pulse of teaching and modeling a
                          Biblical worldview in every aspect of CVCS. Our kiddos
                          are learning about Jesus in every subject they learn.
                          What an incredibly important thread which weaves
                          through all interactions at school
                        </p>
                        <div className="d-flex justify-content-between">
                          <Ellipsis className="header-btn-icon" />
                          <div className="d-flex justify-content-between ">
                            <button className="action-btn d-flex">
                              <div className="button-img me-2">
                                <img
                                  className="img-fluid"
                                  src={DoubleUser}
                                  alt="user"
                                />
                              </div>
                              Assign comment
                            </button>
                            &nbsp; | &nbsp;
                            <button className="action-btn d-flex">
                              <Plus className="me-2 header-btn-icon" />
                              Add tag
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="section-padding">
                        <div className="bottom-tag-btn d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 bottom-tag-btn">
                            <button
                              onClick={() => handleActiveBtn("1", "reply")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["1"] === "reply" ? "active" : ""
                              }`}
                            >
                              <ReplyAllIcon className="me-2" />
                              Reply all
                            </button>
                            <button
                              onClick={() => handleActiveBtn("1", "forward")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn[1] === "forward" ? "active" : ""
                              }`}
                            >
                              <ForwardIcon className="me-2" />
                              Forward all
                            </button>
                            <button
                              onClick={() => handleActiveBtn("1", "note")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["1"] === "note" ? "active" : ""
                              }`}
                            >
                              <NotebookPen className="me-2" />
                              Add note
                            </button>
                          </div>
                          <div className="position-relative">
                            <div className="search-icon">
                              <img
                                className="img-fluid"
                                src={DoubleUser}
                                alt="sorted-icon"
                              />
                            </div>
                            <Select
                              className="header-select header-action-select"
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              placeholder="Assign all comments"
                            />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Accordion>
            <Accordion activeKey={openKey}>
              <div className="content-box-two">
                <Card className="mb-3 border-0 ">
                  <Card.Header className="bg-white border-0  d-flex align-items-center justify-content-between">
                    <div>
                      <CustomToggle eventKey="2">
                        <div className="d-flex align-items-center">
                          <span className="custom-badge-color me-2">
                            Parent
                          </span>
                          <h2 className="mb-0">Brianna DeBrucky</h2>
                          <span className="ms-2 accordian-circle"></span>
                        </div>
                      </CustomToggle>
                      <div
                        className="mt-2 text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        📅 Tue, Oct 13, 2025 &nbsp; | &nbsp; 📋 View survey
                        &nbsp; | &nbsp;{" "}
                        <span className="custom-prometer-badge">Promoter</span>
                      </div>
                    </div>
                    <div className="ms-3">
                      {openKey === "2" ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey="2">
                    <Card.Body className="p-0">
                      <hr />
                      <div className="section-padding">
                        <p className="content-heading">
                          Please briefly describe why you provided that score:{" "}
                          <span className="ms-2 accordian-circle"></span>
                        </p>
                        <p>
                          There is a constant pulse of teaching and modeling a
                          Biblical worldview in every aspect of CVCS. Our kiddos
                          are learning about Jesus in every subject they learn.
                          What an incredibly important thread which weaves
                          through all interactions at school
                        </p>
                        <div className="d-flex justify-content-between">
                          <Ellipsis className="header-btn-icon" />
                          <div className="d-flex justify-content-between ">
                            <button className="action-btn d-flex">
                              <div className="button-img me-2">
                                <img
                                  className="img-fluid"
                                  src={DoubleUser}
                                  alt="user"
                                />
                              </div>
                              Assign comment
                            </button>
                            &nbsp; | &nbsp;
                            <button className="action-btn d-flex">
                              <Plus className="me-2 header-btn-icon" />
                              Add tag
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="section-padding">
                        <div className="bottom-tag-btn d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 bottom-tag-btn">
                            <button
                              onClick={() => handleActiveBtn("2", "reply")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["2"] === "reply" ? "active" : ""
                              }`}
                            >
                              <ReplyAllIcon className="me-2" />
                              Reply all
                            </button>
                            <button
                              onClick={() => handleActiveBtn("2", "forward")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["2"] === "forward" ? "active" : ""
                              }`}
                            >
                              <ForwardIcon className="me-2" />
                              Forward all
                            </button>
                            <button
                              onClick={() => handleActiveBtn("2", "note")}
                              className={`header-btn bottom-action-btn ${
                                activeBtn["2"] === "note" ? "active" : ""
                              }`}
                            >
                              <NotebookPen className="me-2" />
                              Add note
                            </button>
                          </div>
                          <div className="position-relative">
                            <div className="search-icon">
                              <img
                                className="img-fluid"
                                src={DoubleUser}
                                alt="sorted-icon"
                              />
                            </div>
                            <Select
                              className="header-select header-action-select"
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              placeholder="Assign all comments"
                            />
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            </Accordion>
          </div>
        </Col>
        <Col xl={3} lg={4} sm={12} className="custom-border ps-0">
          <div className="right-sidebar position-relative">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 custom-tabs"
            >
              <Tab eventKey="home" title="Al Summary">
                <div className="tabs-content mb-3">
                  <div className="tabs-input d-flex align-items-center">
                    <input type="checkbox" />
                    <div className="text-color">
                      {" "}
                      <Trash className="icon-color me-2" /> Delate
                    </div>
                  </div>
                </div>
                <div className="tabs-content mb-3">
                  <div className="tabs-input d-flex align-items-center">
                    <input type="checkbox" />
                    <div className="history-wrapper">
                      <h3>Improvement Plan</h3>
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className="history-icon-wrapper mb-2">
                            <span className="text-color">
                              {" "}
                              <Calendar className="icon-color" /> 1 minute ago
                              &nbsp; | &nbsp; <Lock className="icon-color" />{" "}
                              private
                            </span>
                          </div>
                          <span className="badge-wrapper">
                            Time period: Last 30 days
                          </span>
                        </div>
                        <div className="right-icon">
                          <ChevronRight className="icon-color" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs-content">
                  <div className="tabs-input d-flex align-items-center">
                    <input type="checkbox" />
                    <div className="history-wrapper">
                      <h3>AI summary 13.08.25</h3>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="history-icon-wrapper mb-2">
                            <span className="text-color">
                              {" "}
                              <Calendar className="icon-color" /> Tue, 13 Oct,
                              2025
                            </span>
                            <span className="text-color">
                              {" "}
                              <User className="icon-color" /> 3 participants
                            </span>
                          </div>
                          <div className="d-inline-grid">
                            <span className="badge-wrapper mb-2">
                              Time period: Last 30 days
                            </span>
                            <span className="badge-wrapper">
                              Time period: Last 30 days
                            </span>
                          </div>
                        </div>
                        <div className="right-icon">
                          <ChevronRight className="icon-color" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="profile"
                title={
                  <span>
                    History <span>(2)</span>
                  </span>
                }
              >
                <div className="tabs-content mb-3">
                  <div className="tabs-input d-flex align-items-center">
                    <input type="checkbox" />
                    <div className="text-color">
                      {" "}
                      <Trash className="icon-color me-2" /> Delate
                    </div>
                  </div>
                </div>
                <div className="tabs-content mb-3">
                  <div className="tabs-input d-flex align-items-center">
                    <input type="checkbox" />
                    <div className="history-wrapper">
                      <h3>Improvement Plan</h3>
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className="history-icon-wrapper mb-2">
                            <span className="text-color">
                              {" "}
                              <Calendar className="icon-color" /> 1 minute ago
                              &nbsp; | &nbsp; <Lock className="icon-color" />{" "}
                              private
                            </span>
                          </div>
                          <span className="badge-wrapper">
                            Time period: Last 30 days
                          </span>
                        </div>
                        <div className="right-icon">
                          <ChevronRight className="icon-color" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs-content">
                  <div className="tabs-input d-flex align-items-center">
                    <input type="checkbox" />
                    <div className="history-wrapper">
                      <h3>AI summary 13.08.25</h3>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="history-icon-wrapper mb-2">
                            <span className="text-color">
                              {" "}
                              <Calendar className="icon-color" /> Tue, 13 Oct,
                              2025
                            </span>
                            <span className="text-color">
                              {" "}
                              <User className="icon-color" /> 3 participants
                            </span>
                          </div>
                          <div className="d-inline-grid">
                            <span className="badge-wrapper mb-2">
                              Time period: Last 30 days
                            </span>
                            <span className="badge-wrapper">
                              Time period: Last 30 days
                            </span>
                          </div>
                        </div>
                        <div className="right-icon">
                          <ChevronRight className="icon-color" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
            <div className="custom-pops d-flex align-items-center gap-2 pe-2">
              <Maximize2
                size={18}
                style={{ cursor: "pointer" }}
                className="icon-hover"
              />
              <X
                size={20}
                style={{ cursor: "pointer" }}
                className="icon-hover"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Comments;
