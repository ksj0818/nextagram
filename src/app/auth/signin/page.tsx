import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SocialSigninBtn from "@/components/ui/common/SocialSigninBtn";
import { getServerSession } from "next-auth/next";
import { getProviders } from "next-auth/react";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = (await getProviders()) ?? {};

  return (
    <>
      <SocialSigninBtn providers={providers} />
    </>
  );
}
