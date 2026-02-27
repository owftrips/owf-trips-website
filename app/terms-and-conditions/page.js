import PolicyPageShell from "../components/PolicyPageShell";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read the OWF Trips terms and conditions.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageShell title="Terms & Conditions" breadcrumb="Terms & Conditions" />
  );
}
