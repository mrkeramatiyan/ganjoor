"use client";
import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container/Container";
import InputBase from "@mui/material/InputBase";

import Button from "@mui/material/Button";

import ModalForSearch from "@/modules/main/components/modalForSearch/modalForSearch.component";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopBar() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const router = useRouter();

  const clickRouteHandle = () => {
    router.push("/auth");
  };

  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "nowrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link href="/">گنجو (دردانه های ادب پارسی)</Link>
            </Typography>
            {/* <Button
              onClick={handleOpenModal}
              variant="outlined"
              startIcon={<SearchIcon style={{ marginLeft: "10px" }} />}
              style={{ color: "#fff", direction: "rtl", borderColor: "#fff" }}
            >
              جستجوی شعر و شاعر ...
            </Button> */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box component="span" onClick={clickRouteHandle}>
              <Button variant="contained" sx={{ color: "white" }}>
                ورود / نام نویسی
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ModalForSearch
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  );
}
