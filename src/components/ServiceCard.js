export default function ServiceCard({ title, description, location }) {
  const titleColor = location === 'palm-desert' ? 'text-palm-desert-600' : 'text-loma-linda-600'

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className={`text-xl font-bold ${titleColor} mb-3`}>
        {title}
      </h4>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  )
}