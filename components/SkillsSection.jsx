import { skillsCategoriesData } from '@/data/skills';
import TechBadge from '@/components/TechBadge';

export default function SkillsSection() {
  return (
    <section id="expertise" className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 reveal">
        <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-[#22C55E] mb-2">Capabilities</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-[#F9FAFB] tracking-tight">
          Technical Expertise
        </h3>
        <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
          Tools, languages, and frameworks I work with regularly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsCategoriesData.map((category) => (
          <div
            key={category.id}
            className={`p-6 rounded-2xl border border-gray-200 dark:border-[#374151] bg-gray-50 dark:bg-[#1F2937] hover-lift reveal ${category.colSpan}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl ${category.iconColor} flex items-center justify-center font-bold`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.iconPath} />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-[#F9FAFB] text-xl">{category.title}</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <TechBadge
                  key={idx}
                  name={skill.name}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
