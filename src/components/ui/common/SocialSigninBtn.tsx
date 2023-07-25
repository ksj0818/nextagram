"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import ColorBtn from "./ColorBtn";

type IProps = {
  providers: Record<string, ClientSafeProvider>;
};

export default function SocialSigninBtn({ providers }: IProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  return (
    <div className="flex justify-center mt-24">
      {Object.values(providers).map(({ name, id }) => (
        <ColorBtn text={`Sign in with ${name}`} key={id} onClick={() => signIn(id, { callbackUrl })} size="big" />
      ))}
    </div>
  );
}
