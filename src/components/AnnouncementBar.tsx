import { Link } from "@tanstack/react-router";

export function AnnouncementBar() {
  return (
    <div className="bg-[#15191e] text-white text-[12px] font-medium py-[6px] text-center">
      New: UAE VAT & Corporate Tax services now available —{" "}
      <Link
        to="/services/$slug"
        params={{ slug: "uae-vat-ct" }}
        className="text-[#ff5900] hover:underline"
      >
        Learn more →
      </Link>
    </div>
  );
}
