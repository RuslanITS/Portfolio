import * as React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import type { Project } from "../../../Type";

type Props = {
  show: boolean;
  handleClose: () => void;
  onAddProject: (project: Project) => void;
};

const ProjectModal = ({show, handleClose, onAddProject}: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const submitHandler = (
    e: React.SyntheticEvent
  ) => {
    e.preventDefault();

    if (
      !title.trim() || !description.trim() ||
      !technology.trim() || !githubUrl.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const newProject: Project = {
      id: Date.now(),
      title,
      description,
      technology: technology
        .split(",")
        .map((item) => item.trim()),
      githubUrl,
    };

    onAddProject(newProject);

    toast.success("Project added successfully");

    setTitle("");
    setDescription("");
    setTechnology("");
    setGithubUrl("");

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Project</Modal.Title>
      </Modal.Header>

      <Form onSubmit={submitHandler}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Project Name</Form.Label>

            <Form.Control
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />
          </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Technologies</Form.Label>

              <Form.Control
                placeholder="React, TypeScript, Bootstrap"
                value={technology}
                onChange={(e) =>
                  setTechnology(e.target.value)
                }
              />
            </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>

            <Form.Control
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>GitHub URL</Form.Label>

            <Form.Control
              value={githubUrl}
              onChange={(e) =>
                setGithubUrl(e.target.value)
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="danger"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            type="submit"
          >
            Add Project
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProjectModal;