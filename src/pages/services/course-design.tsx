
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CourseDesignHero from "@/components/services/course-design/CourseDesignHero";
import CourseDesignServices from "@/components/services/course-design/CourseDesignServices";
import CourseDesignPricing from "@/components/services/course-design/CourseDesignPricing";
import ServiceCTA from "@/components/services/ServiceCTA";
import ConversationCTA from "@/components/services/ConversationCTA";

export default function CourseDesignPage() {
  return (
    <>
      <Head>
        <title>Course Design Services | Mike Beasley & Associates</title>
        <meta 
          name="description" 
          content="Our course design services help organizations create engaging, effective learning experiences that drive skill development and knowledge retention." 
        />
      </Head>
      
      <Layout>
        <CourseDesignHero />
        <CourseDesignServices />
        <CourseDesignPricing />
        <ConversationCTA />
        <ServiceCTA />
      </Layout>
    </>
  );
}
