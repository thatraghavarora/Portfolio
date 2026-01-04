const experience = [
  {
    role: 'Founder',
    company: 'Webpeaker',
    timeframe: '2024 - Present',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQHEvCpNzUS9wg/img-crop_100/B56ZmCHRImI4AQ-/0/1758824571054?e=1769040000&v=beta&t=tu3J2mKnUTh0qrjiWyzn4AbHhKQbGnrJ8q2-pq33rpU',
    summary:
      'Launched Webpeaker to build cyber-first funnels, portfolios, and landing pages for fast-moving founders.',
    details:
      'Leading strategy, design, and secure development sprints while mentoring a small remote squad.',
  },
  {
    role: 'Founder',
    company: 'Cyberhelper',
    timeframe: '2026 - Present',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQHggFML5d7jMw/company-logo_100_100/B56Zsr8YDmHkAQ-/0/1765968807794?e=1769040000&v=beta&t=JkkPePf_pbUtDohn6Iig7E49QhNwH45Mf5A7mz2aACU',
    summary:
      'Started Cyberhelper to guide students and SMBs through incident response, phishing hygiene, and security ops.',
    details:
      'Delivering weekend clinics, incident playbooks, and zero-cost tooling recommendations across India.',
  },
  {
    role: 'Web Developer',
    company: 'Srastr',
    timeframe: '3 Months',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGUeS3_WCfN5A/company-logo_200_200/B56ZbS_7ISG4AI-/0/1747296695384/srastr_official_logo?e=1769040000&v=beta&t=jHRqhISeSe_MafH70B7QVLKFA04W0h9382d7jVAAI10',
    summary:
      'Contracted to accelerate Srastr’s marketing site revamp with production-ready React and SEO optimization.',
    details:
      'Owned component library setup, animation polish, and QA support through launch.',
  },
]

const education = [
  {
    title: '10th Grade · RBSE (English Medium)',
    place: 'Shri Pragya Public School',
    timeframe: 'Commerce + Computer · 62%',
    logo: 'https://play-lh.googleusercontent.com/NAKvkTXl50W13JDOdYwlirtKwDrGC7vZwmMF3H5VXBY__q6NUhHRmDt2nYc5sONbvwX0',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZpY1Dy_1hPv9xOZWXXMTBuy0keI7vu2wkQ&s',
  },
  {
    title: '12th Grade · RBSE (English Medium)',
    place: 'Shri Pragya Public School',
    timeframe: 'Commerce + Computer · 79.40% · Computer 99/100',
    logo: 'https://play-lh.googleusercontent.com/NAKvkTXl50W13JDOdYwlirtKwDrGC7vZwmMF3H5VXBY__q6NUhHRmDt2nYc5sONbvwX0',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZpY1Dy_1hPv9xOZWXXMTBuy0keI7vu2wkQ&s',
  },
  {
    title: 'BCA in Cyber Security',
    place: 'Poornima University',
    timeframe: 'Batch 2025 - 2028',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Poornima_University.png/250px-Poornima_University.png',
    photo: 'https://poornima.edu.in/assets/images/Online_meta.png',
  },
]

function JourneySection() {
  return (
    <section id="journey" className="journey-section">
      <div className="section-header">
        <p className="eyebrow">Journey</p>
        <h2>Work Experience</h2>
        <p>Founder, developer, and relentless bug hunter helping brands stay resilient.</p>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article key={item.company + item.role} className="experience-card">
            <div className="experience-head">
              {item.logo && (
                <div className="experience-logo">
                  <img src={item.logo} alt={`${item.company} logo`} />
                </div>
              )}
              <div>
                <p className="card-title">
                  {item.role} @ {item.company}
                </p>
                <p className="timeframe">{item.timeframe}</p>
              </div>
            </div>
            <p>{item.summary}</p>
            {item.details && (
              <details className="experience-details">
                <summary>More context</summary>
                <p>{item.details}</p>
              </details>
            )}
          </article>
        ))}
      </div>
      <div className="education-grid">
        <div className="section-header small">
          <h3>Educational Qualification</h3>
        </div>
        {education.map((item) => (
          <article key={item.title} className="education-card">
            <div className="education-head">
              {item.logo && (
                <div className="education-logo">
                  <img src={item.logo} alt={`${item.place} logo`} />
                </div>
              )}
              <div>
                <p className="card-title">{item.title}</p>
                <p className="timeframe">{item.timeframe}</p>
                <p>{item.place}</p>
              </div>
            </div>
            {item.photo && (
              <div className="education-photo">
                <img src={item.photo} alt={item.place} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default JourneySection
