import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import {
  staffingChallenges,
  staffingOverviewPoints,
  staffingModels,
  staffingBenefits,
  staffingSpecializations,
  staffingCollaboration,
  staffingSafeguards,
  staffingProcess,
  staffingPerformance,
  staffingFaqs,
} from "./staffAugmentationData";

import "./staffAugmentation.css";

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="staff-augmentation__section-heading">
      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

function StaffAugmentationPage() {
  return (
    <main className="staff-augmentation">
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="Staff Augmentation & Delivery Support"
        title="Build the Delivery Capacity You Need"
        description="Flexible technology and delivery specialists for organizations that need additional capacity, specific expertise, and a clear working model without waiting for a lengthy permanent hiring cycle."
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label: "Staff Augmentation",
          },
        ]}
        action={{
          label: "Book a Consultation",
          path: "/contact",
        }}
        showImagePlaceholder
      />

      {/* ========================================
          CHALLENGES
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Staff Augmentation"
            title="Your Roadmap Cannot Wait for a Lengthy Hiring Cycle"
            description="Delivery requirements can appear faster than permanent recruitment can respond. Staff augmentation provides a practical way to add relevant capacity while keeping your internal team close to the work."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--three">
            {staffingChallenges.map((challenge) => (
              <article
                className="staff-augmentation__card"
                key={challenge.id}
              >
                <span className="staff-augmentation__number">
                  {String(challenge.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3>{challenge.title}</h3>

                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          DELIVERY TEAM OVERVIEW
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--soft">
        <div className="container staff-augmentation__overview">
          <div className="staff-augmentation__overview-content">
            <span className="eyebrow">
              Our Approach
            </span>

            <h2>
              A Dependable Extension of Your
              Delivery Team
            </h2>

            <p>
              CyberX Soft provides dedicated
              specialists and managed delivery support
              for organizations that need additional
              capacity, specific expertise, and a
              clearly defined operating model.
            </p>

            <p>
              In a conventional augmentation model,
              your internal leaders retain product,
              technical, and commercial direction.
              CyberX Soft provides the agreed
              specialist capacity and operational
              support around it.
            </p>

            <Link
              to="/contact"
              className="staff-augmentation__primary-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="staff-augmentation__overview-points">
            {staffingOverviewPoints.map((point) => (
              <article
                className="staff-augmentation__overview-point"
                key={point.id}
              >
                <CheckCircle2
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <h3>{point.title}</h3>

                  <p>{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          ENGAGEMENT MODELS
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Flexible Support That Matches How You Work"
            description="Each engagement begins with a clear requirement, expected responsibilities, working arrangement, and delivery cadence."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--two">
            {staffingModels.map((model) => (
              <article
                className="staff-augmentation__card staff-augmentation__model-card"
                key={model.id}
              >
                <span className="staff-augmentation__pill">
                  {model.label}
                </span>

                <h3>{model.title}</h3>

                <p>{model.description}</p>
              </article>
            ))}
          </div>

          <div className="staff-augmentation__callout">
            <div>
              <span className="eyebrow">
                White-Label Delivery
              </span>

              <h3>
                Need Confidential Delivery Capacity
                Behind Your Brand?
              </h3>

              <p>
                Software firms, agencies,
                consultancies, and other delivery
                partners can discuss confidential
                offshore support where responsibilities,
                client interaction, and delivery scope
                are clearly agreed.
              </p>
            </div>

            <Link
              to="/contact"
              className="staff-augmentation__callout-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          BENEFITS
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery Benefits"
            title="Capacity Should Make Delivery Easier to Manage"
            description="The goal is not simply to add more people. The engagement should provide useful capacity while maintaining visibility, accountability, and flexibility."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--four">
            {staffingBenefits.map((benefit) => (
              <article
                className="staff-augmentation__dark-card"
                key={benefit.id}
              >
                <span className="staff-augmentation__number">
                  {String(benefit.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SPECIALIST COVERAGE
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Relevant Delivery Expertise"
            title="Build a Focused Role or Combine Complementary Skills"
            description="CyberX Soft can discuss specialist requirements across technology, enterprise systems, cybersecurity, data, creative delivery, growth, and operational support."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--three">
            {staffingSpecializations.map(
              (specialization) => (
                <article
                  className="staff-augmentation__card staff-augmentation__specialization-card"
                  key={specialization.id}
                >
                  <h3>
                    {specialization.title}
                  </h3>

                  <ul className="staff-augmentation__check-list">
                    {specialization.roles.map(
                      (role) => (
                        <li key={role}>
                          <Check
                            size={15}
                            strokeWidth={2}
                            aria-hidden="true"
                          />

                          <span>{role}</span>
                        </li>
                      )
                    )}
                  </ul>
                </article>
              )
            )}
          </div>

          <p className="staff-augmentation__note">
            Specific technologies, platforms,
            seniority, availability, and assessment
            requirements are confirmed when reviewing
            each role. Technology names do not imply an
            official vendor partnership or guaranteed
            specialist availability.
          </p>
        </div>
      </section>

      {/* ========================================
          COLLABORATION
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="International Collaboration"
            title="Flexible Collaboration. Extended Delivery."
            description="Working arrangements can be designed around suitable overlap between your internal team and the assigned remote specialists."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--two">
            {staffingCollaboration.map((item) => (
              <article
                className="staff-augmentation__card"
                key={item.id}
              >
                <span className="staff-augmentation__number">
                  {String(item.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="staff-augmentation__note">
            Extended-hours or overnight progress
            depends on the agreed schedule, assigned
            specialists, and suitable time-zone
            arrangements. It is not an automatic
            feature of every engagement.
          </p>
        </div>
      </section>

      {/* ========================================
          SECURITY & CONTINUITY
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Security & Continuity"
            title="Client Control Supported by Clear Safeguards"
            description="Security, access, confidentiality, intellectual property, and continuity requirements should be agreed before specialists enter the client environment."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--two">
            {staffingSafeguards.map((item) => (
              <article
                className="staff-augmentation__dark-card staff-augmentation__safeguard"
                key={item.id}
              >
                <ShieldCheck
                  size={25}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="staff-augmentation__dark-note">
            Regulatory requirements are reviewed for
            relevant engagements. References to
            regulations do not represent a general
            CyberX Soft certification or guarantee of
            compliance.
          </p>
        </div>
      </section>

      {/* ========================================
          AUGMENTATION PROCESS
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="From Requirement to an Agreed Working Team"
            description="A structured process helps both sides understand the role, responsibilities, access requirements, working schedule, and delivery expectations before onboarding."
          />

          <div className="staff-augmentation__process-grid">
            {staffingProcess.map((step) => (
              <article
                className="staff-augmentation__process-card"
                key={step.id}
              >
                <span className="staff-augmentation__process-number">
                  {String(step.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div>
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="staff-augmentation__note">
            Shortlisting and mobilisation timelines
            are confirmed after the required skills,
            availability, assessments, contractual
            requirements, and onboarding arrangements
            are understood.
          </p>
        </div>
      </section>

      {/* ========================================
          PERFORMANCE MANAGEMENT
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="Performance Management"
            title="Clear Expectations. Continuous Oversight."
            description="Performance management should give clients visibility into delivery while identifying issues early enough to discuss appropriate action."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--four">
            {staffingPerformance.map((item) => (
              <article
                className="staff-augmentation__card"
                key={item.id}
              >
                <span className="staff-augmentation__number">
                  {String(item.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PUBLIC PRICING STATUS
      ======================================== */}

      <section className="staff-augmentation__pricing-note">
        <div className="container">
          <div className="staff-augmentation__pricing-box">
            <span className="eyebrow">
              Commercial Planning
            </span>

            <h2>
              Pricing Built Around the Requirement
            </h2>

            <p>
              Rates depend on the required role,
              seniority, workload, duration,
              working-hour overlap, security
              requirements, and level of management
              support.
            </p>

            <Link
              to="/contact"
              className="staff-augmentation__primary-link"
            >
              Request a Quote

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ
      ======================================== */}

      <FAQSection
        items={staffingFaqs}
        title="Staff Augmentation FAQs"
      />

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <CTASection
        title="Let's Shape the Team You Need"
        description="Tell us about the skills, workload, working hours, and delivery requirements you need support with. We can help define a suitable engagement model and next step."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default StaffAugmentationPage;