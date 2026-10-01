
/*
  CYBERX SOFT — APPROVED CASE STUDIES

  Add a case study to this array only after confirming:

  1. CyberX Soft's actual role in the engagement.
  2. The client's permission to publish the work.
  3. The project scope and technologies used.
  4. Any results or statistics being claimed.
  5. Approval for project screenshots and other assets.

  The original eight specimen case studies have been
  removed as required by the CEO website brief.

  Genuine projects will be added here after verification.
*/

export const caseStudies = [];

/*
  Build filter categories automatically from approved
  case studies so the filter list stays accurate.
*/

export const caseStudyCategories = [
  "All",
  ...new Set(
    caseStudies
      .map((caseStudy) => caseStudy.category)
      .filter(Boolean)
  ),
];
