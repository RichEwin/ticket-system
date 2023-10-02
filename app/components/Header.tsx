import Link from "next/link";

export default function Header() {
  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Link href="/create">Create</Link>
    </div>
  );
}
