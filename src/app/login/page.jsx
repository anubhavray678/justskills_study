"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // wrap your async call here
      const loadData = async () => {
        if (status === "loading") {
          return <div className={styles.loading}>Loading...</div>;
        }

        if (status === "authenticated") {
          router.push("/");
        }
      };

      // then call it here
      loadData();
    }
  }, [status, router]);

  // if (status === "loading") {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   router.push("/");
  //   return;
  // }
  // if (check) {
  //   router.push('/some/path');
  //   return;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div> */}
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
        {/* <div className={styles.socialButton}>Sign in with Facebook</div> */}
      </div>
    </div>
  );
};

export default LoginPage;
