// component.tsx.hbs

interface LinkProps {
  href: string;
  label: string;
}

const Link: React.FC<LinkProps> = ({ href, label }) => {
  return (
    <a className="px-2 text-button-primary items-start underline" href={href}>
      {label}
    </a>
  );
};

export default Link;
