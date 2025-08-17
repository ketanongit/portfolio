interface EducationItem {
    id: number;
    institution: string;
    degree: string;
    startDate: string | null;
    endDate: string | null;
    location: string | null;
}

export default function Education({ items }: { items: EducationItem[] }) {
    return (
        <section id="education" className="py-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Education</h2>
            <div className="space-y-6">
                {items.map((edu) => (
                    <div key={edu.id} className="bg-slate-800 shadow-sm rounded-lg p-5 border border-slate-700 hover:shadow-md transition">
                        <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                        <p className="text-gray-300">{edu.institution}</p>
                        <p className="text-sm text-gray-400 mt-1">{edu.startDate} - {edu.endDate} | {edu.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
