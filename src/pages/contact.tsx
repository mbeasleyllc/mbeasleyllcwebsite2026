
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Beasley Consulting</title>
        <meta name="description" content="Get in touch with Beasley Consulting to discuss how we can help your organization navigate complex challenges and achieve transformative growth." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactCTA />
      </Layout>
    </>
  );
}
