import PolicyPageShell from "../components/PolicyPageShell";

export const metadata = {
  title: "Disclaimer",
  description: "Read the OWF Trips disclaimer.",
};

export default function DisclaimerPage() {
  return <PolicyPageShell title="Disclaimer" breadcrumb="Disclaimer" />;
}
