import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import { Button, NextLink } from "@/ui-library";
import { useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "./navDrawer";

export const NavBar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme?.breakpoints.down("md"));

	return (
		<NavWrapper sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				color='transparent'
				elevation={0}
			>
				<Toolbar>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: isMobile ? "center" : "flex-start",
						}}
					>
						<NextLink href='/'>
							<img
								src='https://firebasestorage.googleapis.com/v0/b/gift-craker.appspot.com/o/app%2Fgift-craker-logo.png?alt=media&token=3ba35398-72ce-4e86-806d-512608ea42e7'
								alt='Gift Craker Logo'
								height='32px'
								width='auto'
							/>
						</NextLink>
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{!isMobile && (
							<Box
								sx={{
									minWidth: "480px",
									display: "flex",
									justifyContent: "space-around",
									alignItems: "center",
								}}
							>
								<NextLink
									href='/'
									variant='button2'
								>
									Home
								</NextLink>
								<Button variant='text'>About</Button>
								<Button variant='text'>Blog</Button>
							</Box>
						)}
					</Box>

					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}
					>
						{isMobile && <SwipeableTemporaryDrawer variant='ham-burger' />}
					</IconButton>
				</Toolbar>
			</AppBar>
		</NavWrapper>
	);
};

const NavWrapper = styled(Box)(
	() => `
    padding:0;
    margin:0;
    width:100%;
    shadow:none;
    height:48px;

`
);
