const tools = [
  'SEO',
  'Burp Suite',
  'Terminal',
  'WordPress',
  'Content Writing',
  'Bootstrap',
  'HTML',
  'React JS',
  'CSS',
  'Python',
  'JavaScript',
  'C',
  'Sass',
]

const statusSkills = [
  { label: 'Graphic Designing', value: 76 },
  { label: 'Content Writing', value: 85 },
  { label: 'SEO', value: 83 },
  { label: 'Web Pentesting', value: 92 },
  { label: 'Web Development', value: 89 },
]

const languages = [
  { label: 'Hindi', level: 'Native' },
  { label: 'English', level: 'Professional' },
]

const softSkills = [
  'Problem-Solving',
  'Communication',
  'Collaboration',
  'Time Management',
  'Critical Thinking',
]

function ResourcesSection() {
  return (
    <section id="resources" className="resources-section">
      <div className="section-header">
        <p className="eyebrow">Essential tools I use</p>
        <h2>Stack, status & communication.</h2>
      </div>
      <div className="tools-grid">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <div className="skills-dashboard">
        <div className="skills-card">
          <div className="skills-card-head">
            <p className="card-title">Core Skills</p>
            <span>Live proficiency</span>
          </div>
          <div className="skills-matrix">
            {statusSkills.map((skill) => (
              <div key={skill.label} className="skill-meter">
                <div className="skill-meta">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress">
                  <div style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-card alt">
          <div className="skills-card-head">
            <p className="card-title">Languages & Soft Skills</p>
            <span>People & communication</span>
          </div>
          <div className="language-pills">
            {languages.map((lang) => (
              <div key={lang.label} className="language-pill">
                <strong>{lang.label}</strong>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
          <div className="soft-list chips">
            {softSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection
