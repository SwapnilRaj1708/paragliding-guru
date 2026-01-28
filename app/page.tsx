import { Box } from "@mui/material";
import AboutInstructorSection from "../components/home/AboutInstructorSection";
import AffiliatedSection from "../components/home/AffiliatedSection";
import ContactSection from "../components/home/ContactSection";
import CoursesSection from "../components/home/CoursesSection";
import FaqSection from "../components/home/FaqSection";
import Footer from "../components/home/Footer";
import GallerySection from "../components/home/GallerySection";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/home/Navbar";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";

export default function Home() {
	return (
		<Box
			sx={{
				maxWidth: 1520,
				mx: "auto",
				width: "100%",
				bgcolor: "#FFFFFF",
			}}
		>
			<Navbar />
			<Box component="main">
				<HeroSection />
				<AffiliatedSection />
				<AboutInstructorSection />
				<WhyChooseUsSection />
				<CoursesSection />
				<TestimonialsSection />
				<FaqSection />
				<GallerySection />
				<ContactSection />
			</Box>
			<Footer />
		</Box>
	);
}
