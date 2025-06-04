import HeroSection from "./components/HeroSection";
import FeatureSteps from "./components/methodology";
import Testimonials from "./components/testimonials";
import Header1 from "./components/header";
import Footer from "./components/footer";
import Team7 from "./components/team";

export default function Home() {
  return (
    <div>
      <Header1 />
      <main>
        <HeroSection />
        <FeatureSteps />
        <Testimonials />

        <Team7
          title="Meet the Visionaries"
          subtitle="• Core Team"
          description="Our team thrives on creativity, passion, and engineering excellence."
          backgroundColor="black" // Tailwind: bg-slate-900
          textColor="white" // Tailwind: text-slate-100
          accentColor="purple-400" // Tailwind: purple-500
          secondaryColor="#94a3b8" // Tailwind: text-slate-400
          teamMembers={[
            {
              id: 1,
              name: "Jane Doe",
              role: "Lead Designer",
              email: "jane@example.com",
              bio: "Design thinker and Figma ninja.",
              image:
                "https://img.freepik.com/free-photo/3d-illustration-woman-working-laptop_23-2149569348.jpg",
              backgroundColor: "#7c3aed", // purple-700
              socialMedia: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                website: "https://janedoe.com",
              },
            },
            {
              id: 2,
              name: "John Smith",
              role: "Backend Engineer",
              email: "john@example.com",
              bio: "Optimizing APIs since 2010.",
              image:
                "https://img.freepik.com/free-photo/3d-cartoon-character-man-sitting-with-laptop_23-2150871003.jpg",
              backgroundColor: "#059669", // emerald-600
              socialMedia: {
                twitter: "https://twitter.com/johnsmith",
                website: "https://johnsmith.dev",
              },
            },
             {
              id: 3,
              name: "Jane Doe",
              role: "Lead Designer",
              email: "jane@example.com",
              bio: "Design thinker and Figma ninja.",
              image:
                "https://img.freepik.com/free-photo/3d-illustration-woman-working-laptop_23-2149569348.jpg",
              backgroundColor: "#7c3aed", // purple-700
              socialMedia: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                website: "https://janedoe.com",
              },
            },
             {
              id: 4,
              name: "Jane Doe",
              role: "Lead Designer",
              email: "jane@example.com",
              bio: "Design thinker and Figma ninja.",
              image:
                "https://img.freepik.com/free-photo/3d-illustration-woman-working-laptop_23-2149569348.jpg",
              backgroundColor: "#7c3aed", // purple-700
              socialMedia: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                twitter: "https://twitter.com",
                website: "https://janedoe.com",
              },
            },
          ]}
          className="bg-black"
        />
      </main>
      <Footer />
    </div>
  );
}
