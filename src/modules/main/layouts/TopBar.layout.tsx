"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container/Container";

import Button from "@mui/material/Button";

import ModalForSearch from "@/modules/main/components/modalForSearch/modalForSearch.component";

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
            <Button
              onClick={handleOpenModal}
              variant="outlined"
              startIcon={<SearchIcon style={{ marginLeft: "10px" }} />}
              style={{ color: "#fff", direction: "rtl", borderColor: "#fff" }}
            >
              جستجوی شعر و شاعر ...
            </Button>

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
