import * as React from "react";
import { Popper } from "@mui/base/Popper";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { styled } from "@mui/joy/styles";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/joy/MenuList";
import MenuItem from "@mui/joy/MenuItem";
import Link from "next/link";

const Popup = styled(Popper)({
  zIndex: 1000,
});

export default function PracticeMenuBox() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      setOpen(false);
    } else if (event.key === "Escape") {
      buttonRef.current.focus();
      setOpen(false);
    }
  };

  return (
    <div>
      <Typography
        ref={buttonRef}
        id="composition-button"
        // className="hover:text-purple-500"
        aria-controls={"composition-menu"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="plain"
        color="neutral"
        // sx={{
        //   ":hover": {
        //     backgroundColor: "white",
        //   },
        // }}
        onMouseOver={() => {
          setOpen(!open);
        }}
      >
        Practice
      </Typography>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 10],
            },
          },
        ]}
      >
        <ClickAwayListener
          sx={{ backgroundColor: "red" }}
          onClickAway={(event) => {
            if (event.target !== buttonRef.current) {
              handleClose();
            }
          }}
        >
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{
              boxShadow: "sm",
              width: 200,
              backgroundColor: "slate",
            }}
          >
            {" "}
            <Link href="/dsa-questions">
              <MenuItem>DSA Sheet</MenuItem>
            </Link>
            <Link href="/codeground">
              <MenuItem>CodeGround</MenuItem>
            </Link>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}
