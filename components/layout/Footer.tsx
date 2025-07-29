import { ChevronDown } from "lucide-react";

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 104 26"
    role="img"
    aria-label="LinkedIn"
    className={className}
    fill="currentColor"
  >
    <path d="M7.34 25.46H.96V8.57h6.38v16.89zM4.15 6.27a3.17 3.17 0 11-3.17-3.15 3.16 3.16 0 013.17 3.15zM28.84 25.46h-6.4V16.6c0-2.27-.04-5.18-3.16-5.18-3.16 0-3.64 2.47-3.64 5.02v8.99h-6.4V8.57h6.14v2.73h.09a6.52 6.52 0 015.88-3.16c6.29 0 7.45 4.14 7.45 9.52v10.8zM49.61 8.24c-3.11 0-5.17 1.66-6.17 3.23h-.08v-2.7H37.8v16.7h6.39v-8.37c0-2.22.42-4.35 3.16-4.35 2.71 0 2.74 2.53 2.74 4.5v8.22H56.5v-9.3c0-4.9-1.07-8.62-6.89-8.62zM75.31 8.57h-6.38v16.9h13.9V19.4h-7.52v-4.57h6.81V8.57zM89.37 8.57h-6.38V25.46h13.9V19.4h-7.52v-4.57h6.81V8.57zM99.5 6.27a3.17 3.17 0 11-3.17-3.15 3.16 3.16 0 013.17 3.15zM102.66 25.46h-6.38V8.57h6.38z"></path>
  </svg>
);

const generalLinks = [
  { text: "Sign Up", href: "#" },
  { text: "Help Center", href: "#" },
  { text: "About", href: "#" },
  { text: "Press", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Developers", href: "#" },
];

const browseLinkedInLinks = [
  { text: "Learning", href: "#" },
  { text: "Jobs", href: "#" },
  { text: "Games", href: "#" },
  { text: "Salary", href: "#" },
  { text: "Mobile", href: "#" },
  { text: "Services", href: "#" },
  { text: "Products", href: "#" },
  { text: "Top Companies Hub", href: "#" },
];

const businessSolutionsLinks = [
  { text: "Talent", href: "#" },
  { text: "Marketing", href: "#" },
  { text: "Sales", href: "#" },
  { text: "Learning", href: "#" },
];

const directoriesLinks = [
  { text: "Members", href: "#" },
  { text: "Jobs", href: "#" },
  { text: "Companies", href: "#" },
  { text: "Featured", href: "#" },
  { text: "Learning", href: "#" },
  { text: "Posts", href: "#" },
  { text: "Articles", href: "#" },
  { text: "Schools", href: "#" },
  { text: "News", href: "#" },
  { text: "News Letters", href: "#" },
  { text: "Services", href: "#" },
  { text: "Products", href: "#" },
  { text: "Advice", href: "#" },
  { text: "People Search", href: "#" },
];

const legalLinks = [
  { text: "About", href: "#" },
  { text: "Accessibility", href: "#" },
  { text: "User Agreement", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Your California Privacy Choices", href: "#" },
  { text: "Cookie Policy", href: "#" },
  { text: "Copyright Policy", href: "#" },
  { text: "Brand Policy", href: "#" },
  { text: "Guest Controls", href: "#" },
  { text: "Community Guidelines", href: "#" },
];

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) => (
  <div>
    <h3 className="text-base font-semibold text-black mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.text}>
          <a
            href={link.href}
            className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-light-gray pt-12 pb-4">
      <div className="max-w-[1128px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="text-primary-blue col-span-2 md:col-span-4 lg:col-span-1">
            <h2 className="text-2xl font-bold">Linkedin</h2>
          </div>
          <FooterLinkColumn title="General" links={generalLinks} />
          <FooterLinkColumn
            title="Browse LinkedIn"
            links={browseLinkedInLinks}
          />
          <FooterLinkColumn
            title="Business Solutions"
            links={businessSolutionsLinks}
          />
          <FooterLinkColumn title="Directories" links={directoriesLinks} />
        </div>

        <div className="mt-6 pt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-800 items-center">
          <div className="flex items-center gap-1">
            <h2 className="text-2xl font-bold">Linkedin</h2>
            <span>© 2024</span>
          </div>
          {legalLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="hover:underline hover:text-blue-600"
            >
              {link.text}
            </a>
          ))}
          <button className="flex items-center gap-1 hover:underline hover:text-blue-600">
            Language <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
