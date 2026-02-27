import PolicyPageShell from "../components/PolicyPageShell";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the OWF Trips privacy policy.",
};

export default function PrivacyPolicyPage() {
  return <PolicyPageShell title="Privacy Policy" breadcrumb="Privacy Policy" />;
}
