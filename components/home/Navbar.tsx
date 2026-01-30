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
import { useEffect, useState } from "react";
import Logo from "./Logo";
import navigationContent from "@/content/navigation.json";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
				maxWidth: 1520,
				top: 0,
				zIndex: 1100,
				transition: "all 0.3s ease",
				bgcolor: "#3d3d3fc2",
				backdropFilter: "blur(20px)",
				borderBottom: scrolled
					? "1px solid rgba(255,255,255,0.1)"
					: "1px solid transparent",
				boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
			}}
		>
			<Box
				sx={{
					maxWidth: 1400,
					mx: "auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: { xs: 2, md: 4 },
					py: scrolled ? 1.5 : 2,
					transition: "padding 0.3s ease",
					color: "#FFFFFF",
				}}
			>
				<Logo size="sm" />
				<Stack
					direction="row"
					spacing={0.5}
					alignItems="center"
					sx={{ display: { xs: "none", md: "flex" } }}
				>
					{navigationContent.items.map((item) => (
						<Button
							key={item.label}
							variant="text"
							href={item.href}
							endIcon={item.withCaret ? <ArrowDropDownIcon /> : undefined}
							sx={{
								color: "rgba(255,255,255,0.85)",
								fontSize: 15,
								fontWeight: 500,
								px: 2,
								py: 1,
								borderRadius: 2,
								transition: "all 0.2s ease",
								"&:hover": {
									color: "#FFFFFF",
									bgcolor: "rgba(255,255,255,0.1)",
								},
								"& .MuiButton-endIcon": {
									ml: 0.5,
								},
							}}
						>
							{item.label}
						</Button>
					))}
					<Button
						variant="contained"
						href={navigationContent.ctaLink}
						sx={{
							ml: 2,
							px: 3,
							py: 1,
							fontSize: 14,
							fontWeight: 600,
						}}
					>
						{navigationContent.ctaText}
					</Button>
				</Stack>
				<IconButton
					edge="end"
					aria-label="Open navigation menu"
					onClick={handleToggle}
					sx={{
						color: "inherit",
						display: { xs: "inline-flex", md: "none" },
						bgcolor: "rgba(255,255,255,0.1)",
						"&:hover": {
							bgcolor: "rgba(255,255,255,0.2)",
						},
					}}
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
						width: { xs: "85%", sm: 340 },
						bgcolor: "#3d3d3ffc",
						color: "#FFFFFF",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						px: 3,
						py: 2.5,
					}}
				>
					<Logo size="sm" />
					<IconButton
						aria-label="Close navigation menu"
						onClick={handleClose}
						sx={{
							color: "inherit",
							bgcolor: "rgba(255,255,255,0.1)",
							"&:hover": {
								bgcolor: "rgba(255,255,255,0.2)",
							},
						}}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
				<List sx={{ px: 2, py: 2 }}>
					{navigationContent.items.map((item) => (
						<ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
							<ListItemButton
								component="a"
								href={item.href}
								onClick={handleClose}
								sx={{
									px: 2,
									py: 1.5,
									color: "inherit",
									borderRadius: 2,
									"&:hover": {
										bgcolor: "rgba(255,255,255,0.1)",
									},
								}}
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
										<ArrowDropDownIcon fontSize="small" sx={{ opacity: 0.7 }} />
									) : null}
								</Stack>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Box sx={{ px: 3, pb: 3 }}>
					<Button
						variant="contained"
						href={navigationContent.ctaLink}
						fullWidth
						onClick={handleClose}
						sx={{
							py: 1.5,
							fontSize: 15,
							fontWeight: 600,
						}}
					>
						{navigationContent.ctaText}
					</Button>
				</Box>
			</Drawer>
		</Box>
	);
}
