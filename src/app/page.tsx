import { Button } from "@heroui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello app!
      <Button as={Link} href="/members">
        Members
      </Button>
    </div>
  );
}
