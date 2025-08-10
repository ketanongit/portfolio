export default function Education({ items }: { items: any[] }) {
    return (
      <section id="education" className="py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Education</h2>
        <div className="space-y-6">
          {items.map((edu) => (
            <div key={edu.id} className="bg-white shadow-sm rounded-lg p-5 border hover:shadow-md transition">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500 mt-1">{edu.startDate} - {edu.endDate} | {edu.location}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  