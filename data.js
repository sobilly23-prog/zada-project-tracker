// ─────────────────────────────────────────────
// ZADA PROJECT TRACKER — DATA FILE
// This is the only file you need to edit.
//
// To add a new bet:
//   1. Find the right round and channel below
//   2. Copy an existing bet object and paste it
//   3. Give it a unique id (e.g. "r2-p3")
//   4. Fill in title, owner, sub, status
//   5. Push to GitHub — everyone sees the update
//
// Status options: "active" | "at-risk" | "not-started" | "done"
// ─────────────────────────────────────────────

const TRACKER_DATA = {

  kpi: "conversations about development potential",
  kpiSub: "Every bet below either grows this number or we stop doing it. If the number is going up, everything else follows.",

  rounds: [

    // ─── ROUND 1 ───────────────────────────────
    {
      id: 1,
      title: "Get people to reach out",
      dateRange: "April 28 – June 6, 2026",
      channels: [
        {
          id: "push",
          name: "Push",
          tagline: "Dawar goes and finds them",
          desc: "Targeted outreach — higher effort, higher quality conversations",
          bets: [
            {
              id: "r1-p1",
              title: "Flyer drop in 3 target blocks",
              owner: "Dawar",
              sub: "We'll know it worked when: calls from the flyer number increase week over week",
              status: "active",
              note: "How tracking works: A free Google Voice number is printed on the flyer only — every call through it is a flyer-sourced conversation. Dawar answers exactly the same way. No app, no extra step."
            },
            {
              id: "r1-p2",
              title: "Log every door knock conversation weekly",
              owner: "Dawar",
              sub: "We'll know it worked when: we have a real baseline count by end of Round 1",
              status: "active"
            }
          ]
        },
        {
          id: "pull",
          name: "Pull",
          tagline: "Homeowners come find us",
          desc: "Marketing and visibility — conversations come to us, we grow this over time",
          bets: [
            {
              id: "r1-q1",
              title: "Post 3x/week on social media",
              owner: "Sheri + Billy",
              sub: "We'll know it worked when: DMs and questions in the comments increase",
              status: "active"
            },
            {
              id: "r1-q2",
              title: "Homepage \"Talk to us\" call-to-action rewrite",
              owner: "Billy",
              sub: "We'll know it worked when: form submissions are being tracked and increasing from zero",
              status: "not-started"
            },
            {
              id: "r1-q3",
              title: "Google Business Profile refresh with new photos",
              owner: "Dawar + Sheri",
              sub: "We'll know it worked when: profile views go up in the Google dashboard",
              status: "not-started"
            }
          ]
        }
      ],
      weeks: [
        { num: 1, focus: "Lock the baseline",           state: "done",   days: [{n:28,m:"Apr"},{n:29,m:"Apr"},{n:30,m:"Apr"},{n:1,m:"May"},{n:2,m:"May"},{n:3,m:"May",w:true},{n:4,m:"May",w:true}] },
        { num: 2, focus: "First flyer drop",            state: "now",    days: [{n:5,m:"May"},{n:6,m:"May"},{n:7,m:"May"},{n:8,m:"May"},{n:9,m:"May"},{n:10,m:"May",w:true},{n:11,m:"May",w:true}] },
        { num: 3, focus: "Website CTA goes live",       state: "future", days: [{n:12,m:"May"},{n:13,m:"May"},{n:14,m:"May"},{n:15,m:"May"},{n:16,m:"May"},{n:17,m:"May",w:true},{n:18,m:"May",w:true}] },
        { num: 4, focus: "Mid-round check",             state: "future", days: [{n:19,m:"May"},{n:20,m:"May"},{n:21,m:"May"},{n:22,m:"May"},{n:23,m:"May"},{n:24,m:"May",w:true},{n:25,m:"May",w:true}] },
        { num: 5, focus: "Double down on what's working", state: "future", days: [{n:26,m:"May"},{n:27,m:"May"},{n:28,m:"May"},{n:29,m:"May"},{n:30,m:"May"},{n:31,m:"May",w:true},{n:1,m:"Jun",w:true}] },
        { num: 6, focus: "Final count + decide Round 2", state: "future", days: [{n:2,m:"Jun"},{n:3,m:"Jun"},{n:4,m:"Jun"},{n:5,m:"Jun"},{n:6,m:"Jun"},{n:7,m:"Jun",w:true,fade:true},{n:8,m:"Jun",w:true,fade:true}] }
      ]
    },

    // ─── ROUND 2 ───────────────────────────────
    // Bets TBD — plan with Dawar and Sheri at end of Round 1
    {
      id: 2,
      title: "Build the contact list",
      dateRange: "June 22 – August 1, 2026",
      channels: [
        {
          id: "push",
          name: "Push",
          tagline: "Dawar goes and finds them",
          desc: "Targeted outreach — higher effort, higher quality conversations",
          bets: [
            // Add Round 2 bets here after planning session
          ]
        },
        {
          id: "pull",
          name: "Pull",
          tagline: "Homeowners come find us",
          desc: "Marketing and visibility — conversations come to us, we grow this over time",
          bets: [
            // Add Round 2 bets here after planning session
          ]
        }
      ],
      weeks: [
        { num: 1, focus: "TBD", state: "future", days: [{n:22,m:"Jun"},{n:23,m:"Jun"},{n:24,m:"Jun"},{n:25,m:"Jun"},{n:26,m:"Jun"},{n:27,m:"Jun",w:true},{n:28,m:"Jun",w:true}] },
        { num: 2, focus: "TBD", state: "future", days: [{n:29,m:"Jun"},{n:30,m:"Jun"},{n:1,m:"Jul"},{n:2,m:"Jul"},{n:3,m:"Jul"},{n:4,m:"Jul",w:true},{n:5,m:"Jul",w:true}] },
        { num: 3, focus: "TBD", state: "future", days: [{n:6,m:"Jul"},{n:7,m:"Jul"},{n:8,m:"Jul"},{n:9,m:"Jul"},{n:10,m:"Jul"},{n:11,m:"Jul",w:true},{n:12,m:"Jul",w:true}] },
        { num: 4, focus: "TBD", state: "future", days: [{n:13,m:"Jul"},{n:14,m:"Jul"},{n:15,m:"Jul"},{n:16,m:"Jul"},{n:17,m:"Jul"},{n:18,m:"Jul",w:true},{n:19,m:"Jul",w:true}] },
        { num: 5, focus: "TBD", state: "future", days: [{n:20,m:"Jul"},{n:21,m:"Jul"},{n:22,m:"Jul"},{n:23,m:"Jul"},{n:24,m:"Jul"},{n:25,m:"Jul",w:true},{n:26,m:"Jul",w:true}] },
        { num: 6, focus: "TBD", state: "future", days: [{n:27,m:"Jul"},{n:28,m:"Jul"},{n:29,m:"Jul"},{n:30,m:"Jul"},{n:31,m:"Jul"},{n:1,m:"Aug",w:true,fade:true},{n:2,m:"Aug",w:true,fade:true}] }
      ]
    },

    // ─── ROUND 3 ───────────────────────────────
    // Bets TBD — plan with Dawar and Sheri at end of Round 2
    {
      id: 3,
      title: "Speed up targeting",
      dateRange: "August 17 – September 26, 2026",
      channels: [
        {
          id: "push",
          name: "Push",
          tagline: "Dawar goes and finds them",
          desc: "Targeted outreach — higher effort, higher quality conversations",
          bets: [
            // Add Round 3 bets here after planning session
          ]
        },
        {
          id: "pull",
          name: "Pull",
          tagline: "Homeowners come find us",
          desc: "Marketing and visibility — conversations come to us, we grow this over time",
          bets: [
            // Add Round 3 bets here after planning session
          ]
        }
      ],
      weeks: [
        { num: 1, focus: "TBD", state: "future", days: [{n:17,m:"Aug"},{n:18,m:"Aug"},{n:19,m:"Aug"},{n:20,m:"Aug"},{n:21,m:"Aug"},{n:22,m:"Aug",w:true},{n:23,m:"Aug",w:true}] },
        { num: 2, focus: "TBD", state: "future", days: [{n:24,m:"Aug"},{n:25,m:"Aug"},{n:26,m:"Aug"},{n:27,m:"Aug"},{n:28,m:"Aug"},{n:29,m:"Aug",w:true},{n:30,m:"Aug",w:true}] },
        { num: 3, focus: "TBD", state: "future", days: [{n:31,m:"Aug"},{n:1,m:"Sep"},{n:2,m:"Sep"},{n:3,m:"Sep"},{n:4,m:"Sep"},{n:5,m:"Sep",w:true},{n:6,m:"Sep",w:true}] },
        { num: 4, focus: "TBD", state: "future", days: [{n:7,m:"Sep"},{n:8,m:"Sep"},{n:9,m:"Sep"},{n:10,m:"Sep"},{n:11,m:"Sep"},{n:12,m:"Sep",w:true},{n:13,m:"Sep",w:true}] },
        { num: 5, focus: "TBD", state: "future", days: [{n:14,m:"Sep"},{n:15,m:"Sep"},{n:16,m:"Sep"},{n:17,m:"Sep"},{n:18,m:"Sep"},{n:19,m:"Sep",w:true},{n:20,m:"Sep",w:true}] },
        { num: 6, focus: "TBD", state: "future", days: [{n:21,m:"Sep"},{n:22,m:"Sep"},{n:23,m:"Sep"},{n:24,m:"Sep"},{n:25,m:"Sep"},{n:26,m:"Sep",w:true,fade:true},{n:27,m:"Sep",w:true,fade:true}] }
      ]
    }

  ] // end rounds
}; // end TRACKER_DATA
