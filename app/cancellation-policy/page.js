import PolicyPageShell from "../components/PolicyPageShell";

export const metadata = {
  title: "Cancellation Policy",
  description: "Read the OWF Trips cancellation and refund policy.",
};

export default function CancellationPolicyPage() {
  return (
    <PolicyPageShell title="Cancellation Policy" breadcrumb="Cancellation Policy" />
  );
}
