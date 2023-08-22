import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalForSearchProps {
  openModal: boolean;
  handleCloseModal: () => void;
}

export default function ModalForSearch({
  openModal,
  handleCloseModal,
}: ModalForSearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const [dataList, setDataList] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // update dataList based on searchValue
    setDataList(["Item 1", "Item 2", "Item 3"]);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Search
          </Typography>
          <CloseIcon onClick={handleCloseModal} />
        </Box>
        <TextField
          label="Search"
          value={searchValue}
          onChange={handleSearchChange}
          fullWidth
          sx={{ mt: 2, color: "#fff" }}
        />
        <List sx={{ mt: 2 }}>
          {dataList.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
}
