import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({
  openModal,
  setOpenModal,
  contact,
  deleteContact,
  updateContact,
}) {
  const [name, setName] = React.useState(contact.name);
  const [number, setNumber] = React.useState(contact.number);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDelete = () => {
    deleteContact(contact.id);
    setOpenModal(false);
  };

  const handleUpdate = () => {
    const newContact = {
      id: contact.id,
      name: name,
      number: number,
    };
    updateContact(newContact);
    setOpenModal(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Contact
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="form-group">
            <form>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleUpdate} color="success">
            Update
          </Button>
          <Button autoFocus onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
