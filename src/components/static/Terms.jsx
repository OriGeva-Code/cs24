import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { courseStyles } from '../../config/courseStyles';

const Terms = () => {
  const [styles, setStyles] = useState(courseStyles.cs);
  const [courseType, setCourseType] = useState('cs');

  useEffect(() => {
    // Get courseType from localStorage or use default
    const storedCourseType = localStorage.getItem('courseType') || 'cs';
    setCourseType(storedCourseType);
    setStyles(courseStyles[storedCourseType] || courseStyles.cs);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar courseType={courseType} />
      <div className="container mx-auto px-4 py-8 pt-24" style={{ maxWidth: '800px', direction: 'ltr', textAlign: 'left' }}>
        <h1 className={`${styles.textSecondary} text-4xl font-bold mb-4`}>TERMS OF USE</h1>
        <p className="mb-8"><strong>Last updated:</strong> May 08, 2025</p>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>AGREEMENT TO OUR LEGAL TERMS</h2>
          <p className="mb-4">
            We are דניאל זיו (or anyone on his behalf), doing business as CS24 ("Company," "we," "us," "our"), a company registered in Israel at Ya'akov Fichman St 18, holon 5810201.
          </p>
          <p className="mb-4">
            We operate the website http://www.cs24.co.il (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>
          <p className="mb-4">
            CS24 is a student-built academic platform that helps university students in Israel access past exams, study materials, and curated course content. Our goal is to make learning more efficient and less stressful by organizing everything students need in one place, based on their degree, course, and year of study.
          </p>
          <p className="mb-4">
            You can contact us by email at cs24.hit@gmail.com or by mail to Ya'akov Fichman St 18, holon 5810201, Israel.
          </p>
          <p className="mb-4">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and דניאל זיו (or anyone on his behalf), concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="mb-4">
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          </p>
          <p className="mb-4">
            All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
          </p>
          <p className="mb-4">
            We recommend that you print a copy of these Legal Terms for your records.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>TABLE OF CONTENTS</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>OUR SERVICES</li>
            <li>INTELLECTUAL PROPERTY RIGHTS</li>
            <li>USER REPRESENTATIONS</li>
            <li>USER REGISTRATION</li>
            <li>PRODUCTS</li>
            <li>PURCHASES AND PAYMENT</li>
            <li>REFUNDS POLICY</li>
            <li>PROHIBITED ACTIVITIES</li>
            <li>USER GENERATED CONTRIBUTIONS</li>
            <li>CONTRIBUTION LICENSE</li>
            <li>GUIDELINES FOR REVIEWS</li>
            <li>SOCIAL MEDIA</li>
            <li>THIRD-PARTY WEBSITES AND CONTENT</li>
            <li>ADVERTISERS</li>
            <li>SERVICES MANAGEMENT</li>
            <li>PRIVACY POLICY</li>
            <li>COPYRIGHT INFRINGEMENTS</li>
            <li>TERM AND TERMINATION</li>
            <li>MODIFICATIONS AND INTERRUPTIONS</li>
            <li>GOVERNING LAW</li>
            <li>DISPUTE RESOLUTION</li>
            <li>CORRECTIONS</li>
            <li>DISCLAIMER</li>
            <li>LIMITATIONS OF LIABILITY</li>
            <li>INDEMNIFICATION</li>
            <li>USER DATA</li>
            <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
            <li>MISCELLANEOUS</li>
            <li>ACADEMIC INTEGRITY CLAUSE</li>
            <li>EDUCATIONAL USE ONLY</li>
            <li>SYSTEM ABUSE & FAIR USAGE</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>1. OUR SERVICES</h2>
          <p className="mb-4">
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>2. INTELLECTUAL PROPERTY RIGHTS</h2>
          <h3 className={`${styles.textSecondary} text-xl font-bold mb-2`}>Our intellectual property</h3>
          <p className="mb-4">
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
          </p>
          <p className="mb-4">
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
          </p>
          <p className="mb-4">
            The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
          </p>

          <h3 className={`${styles.textSecondary} text-xl font-bold mb-2`}>Your use of our Services</h3>
          <p className="mb-4">
            Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>access the Services; and</li>
            <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
          </ul>
          <p className="mb-4">
            solely for your personal, non-commercial use.
          </p>
          <p className="mb-4">
            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>3. USER REPRESENTATIONS</h2>
          <p className="mb-4">
            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
          </p>
          <p className="mb-4">
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>4. USER REGISTRATION</h2>
          <p className="mb-4">
            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>5. PRODUCTS</h2>
          <p className="mb-4">
            All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>6. PURCHASES AND PAYMENT</h2>
          <p className="mb-4">We accept the following forms of payment:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>PayPal</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>
          <p className="mb-4">
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in ILS.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>7. REFUNDS POLICY</h2>
          <p className="mb-4">All sales are final and no refund will be issued.</p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>8. PROHIBITED ACTIVITIES</h2>
          <p className="mb-4">
            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
          <p className="mb-4">As a user of the Services, you agree not to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services.</li>
            <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
            <li>Use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services.</li>
            <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
            <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means.</li>
            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            <li>Sell or otherwise transfer your profile.</li>
            <li>Use the Services to advertise or offer to sell goods and services.</li>
            <li>Upload copyrighted materials without permission.</li>
            <li>Share access to paid content without authorization.</li>
            <li>Post false, misleading, or outdated academic materials.</li>
            <li>Harvest or scrape user data or course content.</li>
            <li>Use bots or automation to download site content.</li>
            <li>Impersonate tutors, admins, or other students.</li>
            <li>Distribute harmful or malicious code through file uploads.</li>
            <li>Accessing the platform from more devices than permitted.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>29. ACADEMIC INTEGRITY CLAUSE</h2>
          <p className="mb-4">
            Users are prohibited from uploading, sharing, or distributing any materials that violate the academic integrity policies of their institution. This includes but is not limited to leaked exams, impersonation, or unauthorized solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>30. EDUCATIONAL USE ONLY</h2>
          <p className="mb-4">
            The platform and its contents are intended solely for educational and personal academic use. Users may not repurpose, resell, or distribute materials for commercial gain without prior written consent from CS24.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>31. SYSTEM ABUSE & FAIR USAGE</h2>
          <p className="mb-4">
            Users must not attempt to bypass platform limits (e.g., concurrent logins or scraping), upload malicious code, or interfere with server resources. Excessive usage patterns may lead to account suspension or legal action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`${styles.textSecondary} text-2xl font-bold mb-4`}>CONTACT US</h2>
          <p className="mb-4">In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
          <p className="mb-2">דניאל זיו</p>
          <p className="mb-2">Ya'akov Fichman St 18</p>
          <p className="mb-2">holon 5810201</p>
          <p className="mb-2">Israel</p>
          <p>
            <a 
              href="mailto:cs24.hit@gmail.com"
              className={`${styles.textSecondary} hover:text-blue-700 underline`}
            >
              cs24.hit@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms; 