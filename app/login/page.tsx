"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <Button variant="contained" onClick={() => signOut()}>
            Sign out
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      )}
    </Container>
  );
}
