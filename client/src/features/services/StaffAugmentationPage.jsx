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
  staffingOverviewPoints,
  staffingBuyerGroups,
  staffingChallenges,
  staffingModels,
  staffingResponsibilities,
  staffingBenefits,
  staffingSpecializations,
  staffingCollaboration,
  staffingSafeguards,
  staffingProcess,
  staffingPerformance,
  staffingCommercialStructures,
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
        eyebrow="Staff Augmentation and Delivery Support"
        title="IT Staff Augmentation and Dedicated Remote Teams"
        description="CyberX Soft helps international organizations add technology, product, data, cybersecurity, cloud, quality, creative, and delivery professionals through individual assignments, dedicated remote teams, managed pods, and white-label offshore delivery."
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label:
              "Staff Augmentation and Delivery Support",
          },
        ]}
        action={{
          label: "Request Talent Profiles",
          path: "/contact",
        }}
        showImagePlaceholder
      />

      {/* ========================================
          SERVICE OVERVIEW
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--soft">
        <div className="container staff-augmentation__overview">
          <div className="staff-augmentation__overview-content">
            <span className="eyebrow">
              Service Overview
            </span>

            <h2>
              Increase Capacity Without Losing
              Delivery Control
            </h2>

            <p>
              Organizations often need specialist
              skills faster than conventional
              recruitment can provide, or additional
              capacity for a defined delivery phase.
            </p>

            <p>
              Staff augmentation places external
              professionals into your delivery
              environment while your team normally
              retains day-to-day direction. CyberX
              Soft structures the engagement around
              required skills, responsibilities,
              working hours, security requirements,
              reporting, governance, and the level
              of management support required.
            </p>

            <Link
              to="/contact"
              className="staff-augmentation__primary-link"
            >
              Schedule a Staff Augmentation Discussion

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
          WHO THIS SERVICE IS FOR
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="Who This Service Is For"
            title="Built for Organizations That Need Reliable Delivery Capacity"
            description="The service is designed for international organizations that need specialist capability, commercial flexibility, confidentiality, suitable working-hour overlap, and a clear division of management responsibility."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--four">
            {staffingBuyerGroups.map((buyer) => (
              <article
                className="staff-augmentation__card"
                key={buyer}
              >
                <Check
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <h3>{buyer}</h3>
              </article>
            ))}
          </div>

          <p className="staff-augmentation__note">
            Engagements can support organizations in
            the United Kingdom, United States,
            Canada, United Arab Emirates, Saudi
            Arabia, and other international markets,
            subject to the agreed working model,
            availability, contractual requirements,
            and applicable jurisdictional
            considerations.
          </p>
        </div>
      </section>

      {/* ========================================
          BUYER CHALLENGES
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="What Buyers Are Usually Trying to Solve"
            title="Add Capacity Where the Delivery Plan Needs It"
            description="Staff augmentation can be useful when recruitment, specialist availability, changing workloads, or delivery responsibilities are limiting progress."
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
          ENGAGEMENT MODELS
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="Five Engagement Models"
            title="Choose the Operating Model That Fits the Requirement"
            description="The right structure depends on the required skills, client control, delivery responsibility, duration, security needs, working arrangements, and level of CyberX Soft coordination."
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

                <p>
                  <strong>Client control: </strong>
                  {model.clientControl}
                </p>

                <p>
                  <strong>CyberX Soft role: </strong>
                  {model.cyberxRole}
                </p>

                <p>
                  <strong>Best fit: </strong>
                  {model.bestFit}
                </p>
              </article>
            ))}
          </div>

          <div className="staff-augmentation__callout">
            <div>
              <span className="eyebrow">
                White-Label Offshore Delivery
              </span>

              <h3>
                Need Confidential Delivery Capacity
                Behind Your Brand?
              </h3>

              <p>
                Software firms, agencies,
                consultancies, managed-service
                providers, staffing firms, and
                system integrators can discuss
                confidential offshore delivery where
                branding, client interaction,
                responsibilities, ownership, and
                commercial terms are agreed before
                delivery begins.
              </p>
            </div>

            <Link
              to="/contact"
              className="staff-augmentation__callout-link"
            >
              Explore White Label Offshore Delivery

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
          RESPONSIBILITY SPLIT
      ======================================== */}

      <section className="staff-augmentation__section staff-augmentation__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Clear Responsibilities"
            title="Know Who Manages What Before Delivery Begins"
            description="Responsibilities differ between conventional augmentation, managed pods, white-label delivery, placement, and EOR-supported arrangements. The agreement should make the division of responsibility explicit."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--two">
            {staffingResponsibilities.map(
              (responsibility) => (
                <article
                  className="staff-augmentation__card"
                  key={responsibility.id}
                >
                  <h3>
                    {responsibility.title}
                  </h3>

                  <ul className="staff-augmentation__check-list">
                    {responsibility.points.map(
                      (point) => (
                        <li key={point}>
                          <Check
                            size={15}
                            strokeWidth={2}
                            aria-hidden="true"
                          />

                          <span>{point}</span>
                        </li>
                      )
                    )}
                  </ul>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          DELIVERY BENEFITS
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
            eyebrow="Specialist Coverage"
            title="Build a Focused Role or Combine Complementary Skills"
            description="CyberX Soft can discuss specialist requirements across technology, product, data, cybersecurity, cloud, quality, enterprise platforms, automation, design, growth, creative production, and delivery management."
          />

          <div className="staff-augmentation__grid staff-augmentation__grid--three">
            {staffingSpecializations.map(
              (specialization) => (
                <article
                  className="staff-augmentation__card staff-augmentation__specialization-card"
                  key={specialization.id}
                >
                  <span className="staff-augmentation__number">
                    {String(
                      specialization.id
                    ).padStart(2, "0")}
                  </span>

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
            each role. Technology names do not imply
            an official vendor partnership,
            certification, or guaranteed specialist
            availability.
          </p>
        </div>
      </section>

      {/* ========================================
          INTERNATIONAL COLLABORATION
      ======================================== */}

      <section className="staff-augmentation__section">
        <div className="container">
          <SectionHeading
            eyebrow="International Collaboration"
            title="Flexible Collaboration. Extended Delivery."
            description="Working arrangements can be structured around suitable overlap between your internal team and assigned remote specialists."
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
            description="Security, access, confidentiality, intellectual property, continuity, and offboarding requirements should be agreed before specialists enter the client environment."
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
            Regulatory and data-handling
            requirements are reviewed for relevant
            engagements. References to regulations,
            controls, or security practices do not
            represent a general CyberX Soft
            certification or guarantee of
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
            description="A structured process helps both sides understand the role, responsibilities, commercial structure, access requirements, working schedule, and delivery expectations before onboarding."
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
            seniority, availability, assessments,
            notice periods, security checks,
            contractual requirements, and onboarding
            arrangements are understood. No fixed
            public mobilisation target is being
            presented.
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
          COMMERCIAL STRUCTURES
      ======================================== */}

      <section className="staff-augmentation__pricing-note">
        <div className="container">
          <div className="staff-augmentation__pricing-box">
            <span className="eyebrow">
              Commercial Planning
            </span>

            <h2>
              Commercial Structure Built Around
              the Requirement
            </h2>

            <p>
              Depending on the role and operating
              model, an engagement can use one of
              several commercial structures.
            </p>

            <ul className="staff-augmentation__check-list">
              {staffingCommercialStructures.map(
                (structure) => (
                  <li key={structure}>
                    <Check
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                    <span>{structure}</span>
                  </li>
                )
              )}
            </ul>

            <p>
              Pricing is prepared after the role,
              seniority, workload, duration,
              working-hour overlap, security needs,
              responsibilities, and level of
              management support are understood.
              No public rate or savings claim is
              being presented on this page.
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
        title="Staff Augmentation and Dedicated Remote Teams FAQs"
      />

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <CTASection
        title="Tell Us the Role or Team You Need"
        description="Send the role or team requirement, core skills, seniority, number of resources, expected duration, preferred start date, working-hour overlap, and a short description of the work. We can then recommend a suitable sourcing and engagement route."
        buttonLabel="Request Talent Profiles"
        buttonPath="/contact"
      />
    </main>
  );
}

export default StaffAugmentationPage;