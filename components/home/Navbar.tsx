"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
	{ label: "Courses", withCaret: true, href: "#courses" },
	{ label: "Locations", withCaret: true, href: "#contact" },
	{ label: "About us", withCaret: false, href: "#about" },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleToggle = () => {
		setMobileOpen((prev) => !prev);
	};

	const handleClose = () => {
		setMobileOpen(false);
	};

	return (
		<Box
			component="header"
			sx={{
				position: "fixed",
				width: "100%",
				top: 0,
				zIndex: 1100,
				bgcolor: "rgba(87, 87, 89, 0.8)",
				backdropFilter: "blur(2px)",
				maxWidth: 1520,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: { xs: 2, md: 9 },
					py: 1.5,
					minHeight: 68,
					color: "#FFFFFF",
				}}
			>
				<Logo size="sm" />
				<Stack
					direction="row"
					spacing={1}
					alignItems="center"
					sx={{ display: { xs: "none", md: "flex" } }}
				>
					{navItems.map((item) => (
						<Button
							key={item.label}
							variant="text"
							href={item.href}
							endIcon={item.withCaret ? <ArrowDropDownIcon /> : undefined}
							sx={{
								color: "inherit",
								fontSize: 16,
								fontWeight: 400,
								"& .MuiButton-endIcon": {
									ml: 0.5,
								},
							}}
						>
							<Typography component="span" sx={{ fontSize: 16 }}>
								{item.label}
							</Typography>
						</Button>
					))}
					<Button
						variant="contained"
						color="primary"
						href="#contact"
						sx={{
							ml: { xs: 0, md: 2 },
							px: 2,
							py: 0.75,
							fontSize: 14,
							boxShadow:
								"0px 1px 5px rgba(0,0,0,0.12), 0px 2px 2px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2)",
						}}
					>
						Apply Now
					</Button>
				</Stack>
				<IconButton
					edge="end"
					aria-label="Open navigation menu"
					onClick={handleToggle}
					sx={{ color: "inherit", display: { xs: "inline-flex", md: "none" } }}
				>
					<MenuIcon />
				</IconButton>
			</Box>
			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={handleClose}
				ModalProps={{ keepMounted: true }}
				sx={{ display: { xs: "block", md: "none" } }}
				PaperProps={{
					sx: {
						width: { xs: "78%", sm: 320 },
						bgcolor: "rgba(42, 42, 44, 0.98)",
						color: "#FFFFFF",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						px: 2,
						py: 1.5,
					}}
				>
					<Logo size="sm" />
					<IconButton
						aria-label="Close navigation menu"
						onClick={handleClose}
						sx={{ color: "inherit" }}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
				<List sx={{ px: 1, py: 1 }}>
					{navItems.map((item) => (
						<ListItem key={item.label} disablePadding>
							<ListItemButton
								component="a"
								href={item.href}
								onClick={handleClose}
								sx={{ px: 2, py: 1.25, color: "inherit" }}
							>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="space-between"
									sx={{ width: "100%" }}
								>
									<Typography
										component="span"
										sx={{ fontSize: 16, fontWeight: 500 }}
									>
										{item.label}
									</Typography>
									{item.withCaret ? (
										<ArrowDropDownIcon fontSize="small" />
									) : null}
								</Stack>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Box sx={{ px: 2, pb: 2 }}>
					<Button
						variant="contained"
						color="primary"
						href="#contact"
						fullWidth
						onClick={handleClose}
						sx={{ py: 1 }}
					>
						Apply Now
					</Button>
				</Box>
			</Drawer>
		</Box>
	);
}
