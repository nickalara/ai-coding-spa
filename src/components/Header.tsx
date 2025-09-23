interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">{title}</h1>
      {subtitle && (
        <p className="text-xl text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
