import ContactFile from "@/components/reusables/ContactFile";

export const metadata = {
  title: "Contact Us | Justskills",
  description:
    "Use the given form to contact us, and we will get back to you within 48 hours. ",
  openGraph: {
    title: "Contact Us | Justskills",
    description:
      "Use the given form to contact us, and we will get back to you within 48 hours. ",
    metadataBase: new URL("https://justskills.in/"),
  },
};

export default function Contact() {
  return (
    <main className="">
      {/* <section>welcome to about page</section> */}
      {/* <section> */}
      <ContactFile />
      {/* </section> */}
    </main>
  );
}
