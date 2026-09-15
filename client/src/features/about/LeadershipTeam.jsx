import { leadershipTeam } from "./aboutData";

function LeadershipTeam() {
  return (
    <section className="leadership-team">
      <div className="container">
        <div className="leadership-team__header">
          <span className="eyebrow">
            Leadership Team
          </span>

          <h2 className="section-title">
            The Experts Driving Your Success
          </h2>
        </div>

        <div className="leadership-team__grid">
          {leadershipTeam.map((member) => (
            <article
              className="leadership-card"
              key={member.id}
            >
              {/*
                IMAGE PLACEHOLDER
                Replace this block with the final leadership/team photo later.
              */}
              <div className="leadership-card__image-placeholder">
                <span>
                  {member.name.charAt(0)}
                </span>
              </div>

              <div className="leadership-card__content">
                <h3>{member.name}</h3>

                <span className="leadership-card__role">
                  {member.role}
                </span>

                <p>{member.expertise}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipTeam;