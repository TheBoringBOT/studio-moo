import Container from "./container";
import cn from "classnames";
import { SITE_NAME } from "../../lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            {" "}
            <a
              href="ADD URL"
              className="underline hover:text-success duration-200 transition-colors"
            >
              Alert here by {SITE_NAME}
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
}
